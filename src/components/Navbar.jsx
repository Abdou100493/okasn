import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../supabase';

function Navbar() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session ? session.user : null);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session ? session.user : null);
    });

    return () => subscription.unsubscribe();
  }, []);

  async function handleDeconnexion() {
    await supabase.auth.signOut();
    navigate('/');
  }

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-blue-600">
        OkaSN
      </Link>
      <div className="flex gap-6 text-gray-600 font-medium">
        <Link to="/" className="hover:text-blue-600">Accueil</Link>
        <Link to="/annonces" className="hover:text-blue-600">Annonces</Link>
        <Link to="/contact" className="hover:text-blue-600">Contact</Link>
      </div>
      <div className="flex gap-3 items-center">
        {user ? (
          <>
            <span className="text-gray-600 font-medium">
              {user.user_metadata.nom || user.email}
            </span>
            <button
              onClick={handleDeconnexion}
              className="border border-red-500 text-red-500 px-4 py-2 rounded-lg hover:bg-red-50"
            >
              Deconnexion
            </button>
          </>
        ) : (
          <>
            <Link to="/connexion" className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50">
              Connexion
            </Link>
            <Link to="/inscription" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              S'inscrire
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;