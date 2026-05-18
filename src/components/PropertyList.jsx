import React from 'react';
import PropertyCard from './PropertyCard';

const logements = [
  {
    id: 1,
    titre: "Appartement moderne à Plateau",
    prix: 150000,
    ville: "Dakar, Plateau",
    chambres: 3,
    type: "Appartement",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400"
  },
  {
    id: 2,
    titre: "Villa avec jardin à Almadies",
    prix: 450000,
    ville: "Dakar, Almadies",
    chambres: 5,
    type: "Villa",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400"
  },
  {
    id: 3,
    titre: "Studio meublé à Mermoz",
    prix: 80000,
    ville: "Dakar, Mermoz",
    chambres: 1,
    type: "Studio",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400"
  },
  {
    id: 4,
    titre: "Appartement à Sacré-Cœur",
    prix: 200000,
    ville: "Dakar, Sacré-Cœur",
    chambres: 4,
    type: "Appartement",
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=400"
  },
  {
    id: 5,
    titre: "Villa à Thiès Centre",
    prix: 180000,
    ville: "Thiès, Centre",
    chambres: 4,
    type: "Villa",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400"
  },
  {
    id: 6,
    titre: "Studio à Saint-Louis",
    prix: 60000,
    ville: "Saint-Louis",
    chambres: 1,
    type: "Studio",
    image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=400"
  }
];

function PropertyList({ showTitle = true }) {
  return (
    <section className="py-16 px-6 bg-gray-50">
      
      {/* Titre section */}
      {showTitle && (
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">Annonces récentes</h2>
          <p className="text-gray-500 mt-2">Découvrez les logements disponibles partout au Sénégal</p>
        </div>
)}
      {/* Grille de cartes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {logements.map((logement) => (
          <PropertyCard
            key={logement.id}
             id={logement.id}
            image={logement.image}
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