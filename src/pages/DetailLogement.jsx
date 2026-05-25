import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../supabase';

function DetailLogement() {
  const { id } = useParams();
  const [logement, setLogement] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLogement() {
      const { data, error } = await supabase
        .from('logements')
        .select('*')
        .eq('id', id)
        .single();
      if (error) {
        console.error('Erreur:', error);
      } else {
        setLogement(data);
      }
      setLoading(false);
    }
    fetchLogement();
  }, [id]);

  if (loading) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-500 text-lg">Chargement...</p>
      </div>
    );
  }

  if (!logement) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-gray-700">Logement introuvable</h2>
        <Link to="/annonces" className="text-blue-600 mt-4 inline-block hover:underline">
          Retour aux annonces
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-6">
      <div className="max-w-4xl mx-auto">
        <Link to="/annonces" className="text-blue-600 hover:underline mb-6 inline-block">
          Retour aux annonces
        </Link>
        <img
          src={logement.image_url}
          alt={logement.titre}
          className="w-full h-80 object-cover rounded-xl mb-6"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-white rounded-xl p-6 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full">
                  {logement.type}
                </span>
                <h1 className="text-2xl font-bold text-gray-800 mt-2">{logement.titre}</h1>
                <p className="text-gray-500 mt-1">{logement.ville}</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-blue-600">
                  {logement.prix.toLocaleString()} FCFA
                </div>
                <div className="text-gray-500 text-sm">par mois</div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 py-4 border-t border-b border-gray-100 my-4">
              <div className="text-center">
                <div className="text-2xl">Chambres</div>
                <div className="font-semibold">{logement.chambres}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl">Salles de bain</div>
                <div className="font-semibold">{logement.salles_de_bain}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl">Surface</div>
                <div className="font-semibold">{logement.surface} m2</div>
              </div>
            </div>
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Description</h2>
            <p className="text-gray-600 leading-relaxed">{logement.description}</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm h-fit">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Contacter le proprietaire</h2>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">
                {logement.proprietaire_nom.charAt(0)}
              </div>
              <div>
                <div className="font-medium text-gray-800">{logement.proprietaire_nom}</div>
                <div className="text-gray-500 text-sm">Proprietaire</div>
              </div>
            </div>
            <a
              href={"tel:" + logement.telephone}
              className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg hover:bg-blue-700 font-medium mb-3"
            >
              Appeler
            </a>
            <button className="w-full border border-blue-600 text-blue-600 py-3 rounded-lg hover:bg-blue-50 font-medium">
              Envoyer un message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailLogement;
