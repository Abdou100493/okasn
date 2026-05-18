import React from 'react';

function Hero() {
  return (
    <div className="bg-blue-600 text-white py-20 px-6 text-center">
      
      {/* Titre principal */}
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Trouvez votre logement idéal au Sénégal
      </h1>

      {/* Sous-titre */}
      <p className="text-xl mb-10 text-blue-100">
        Appartements, villas, studios — Dakar, Thiès, Saint-Louis et partout au Sénégal
      </p>

      {/* Barre de recherche */}
      <div className="bg-white rounded-xl p-4 max-w-2xl mx-auto flex gap-3">
        <input
          type="text"
          placeholder="Ville, quartier..."
          className="flex-1 px-4 py-2 text-gray-700 outline-none rounded-lg"
        />
        <select className="px-4 py-2 text-gray-700 border border-gray-200 rounded-lg">
          <option>Tout type</option>
          <option>Appartement</option>
          <option>Villa</option>
          <option>Studio</option>
          <option>Bureau</option>
        </select>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 font-medium">
          Rechercher
        </button>
      </div>

      {/* Stats */}
      <div className="flex justify-center gap-12 mt-12 text-blue-100">
        <div>
          <div className="text-3xl font-bold text-white">500+</div>
          <div>Logements disponibles</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-white">1200+</div>
          <div>Propriétaires inscrits</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-white">3000+</div>
          <div>Locataires satisfaits</div>
        </div>
      </div>

    </div>
  );
}

export default Hero;