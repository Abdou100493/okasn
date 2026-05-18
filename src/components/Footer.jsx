import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-12 px-6">
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo + description */}
        <div>
          <h2 className="text-white text-2xl font-bold mb-3">OkaSN</h2>
          <p className="text-sm text-gray-400">
            La plateforme de référence pour la location immobilière au Sénégal.
          </p>
        </div>

        {/* Liens rapides */}
        <div>
          <h3 className="text-white font-semibold mb-3">Liens rapides</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-white">Accueil</a></li>
            <li><a href="/annonces" className="hover:text-white">Annonces</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Types de biens */}
        <div>
          <h3 className="text-white font-semibold mb-3">Types de biens</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Appartements</a></li>
            <li><a href="#" className="hover:text-white">Villas</a></li>
            <li><a href="#" className="hover:text-white">Studios</a></li>
            <li><a href="#" className="hover:text-white">Bureaux</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-3">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>📍 Dakar, Sénégal</li>
            <li>📞 +221 XX XXX XX XX</li>
            <li>✉️ contact@okasn.com</li>
          </ul>
        </div>

      </div>

      {/* Bas du footer */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © 2024 OkaSN — Tous droits réservés
      </div>

    </footer>
  );
}

export default Footer;