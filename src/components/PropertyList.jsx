import React, { useEffect, useState } from 'react';
import PropertyCard from './PropertyCard';
import { supabase } from '../supabase';

function PropertyList({ showTitle = true }) {
  const [logements, setLogements] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLogements() {
      const { data, error } = await supabase
        .from('logements')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Erreur:', error);
      } else {
        setLogements(data);
      }
      setLoading(false);
    }

    fetchLogements();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-500 text-lg">Chargement des annonces...</p>
      </div>
    );
  }

  return (
    <section className="py-16 px-6 bg-gray-50">
      {showTitle && (
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">Annonces récentes</h2>
          <p className="text-gray-500 mt-2">Découvrez les logements disponibles partout au Sénégal</p>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {logements.map((logement) => (
          <PropertyCard
            key={logement.id}
            id={logement.id}
            image={logement.image_url}
            titre={logement.titre}
            prix={logement.prix}
            ville={logement.ville}
            chambres={logement.chambres}
            type={logement.type}
          />
        ))}
      </div>
    </section>
  );
}

export default PropertyList;