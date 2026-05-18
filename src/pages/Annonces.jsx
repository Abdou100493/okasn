import React from 'react';
import PropertyList from '../components/PropertyList';

function Annonces() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Toutes les annonces</h1>
        <p className="text-gray-500 mb-8">Trouvez le logement qui vous correspond</p>
        <PropertyList showTitle={false} />
      </div>
    </div>
  );
}

export default Annonces;