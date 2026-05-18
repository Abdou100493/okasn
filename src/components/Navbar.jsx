import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold text-blue-600">
        OkaSN
      </Link>

      {/* Liens */}
      <div className="flex gap-6 text-gray-600 font-medium">
        <Link to="/" className="hover:text-blue-600">Accueil</Link>
        <Link to="/annonces" className="hover:text-blue-600">Annonces</Link>
        <Link to="/contact" className="hover:text-blue-600">Contact</Link>
      </div>

      {/* Boutons */}
      <div className="flex gap-3">
        <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50">
          Connexion
        </button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          S'inscrire
        </button>
      </div>

    </nav>
  );
}

export default Navbar;