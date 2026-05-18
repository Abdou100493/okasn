import React from 'react';
import { Link } from 'react-router-dom';

function PropertyCard({ id, image, titre, prix, ville, chambres, type }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <img src={image} alt={titre} className="w-full h-48 object-cover" />
        <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
          {type}
        </span>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{titre}</h3>
        <p className="text-gray-500 text-sm mb-3">📍 {ville}</p>
        <div className="flex justify-between items-center">
          <span className="text-blue-600 font-bold text-lg">
            {prix.toLocaleString()} FCFA<span className="text-sm font-normal text-gray-500">/mois</span>
          </span>
          <span className="text-gray-500 text-sm">🛏 {chambres} chambre{chambres > 1 ? 's' : ''}</span>
        </div>
        <Link
          to={`/annonces/${id}`}
          className="mt-4 block w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-center"
        >
          Voir le logement
        </Link>
      </div>
    </div>
  );
}

export default PropertyCard;