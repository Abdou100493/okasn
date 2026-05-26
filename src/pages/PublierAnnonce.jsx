import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabase';

function PublierAnnonce() {
  const navigate = useNavigate();
  const [, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [erreur, setErreur] = useState('');
  const [succes, setSucces] = useState(false);
  const [formData, setFormData] = useState({
    titre: '',
    description: '',
    prix: '',
    ville: '',
    type: 'Appartement',
    chambres: '',
    salles_de_bain: '',
    surface: '',
    image_url: '',
    proprietaire_nom: '',
    telephone: ''
  });

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        navigate('/connexion');
      } else {
        setUser(session.user);
        setFormData(prev => ({
          ...prev,
          proprietaire_nom: session.user.user_metadata.nom || ''
        }));
      }
    });
  }, [navigate]);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setErreur('');

    const { error } = await supabase.from('logements').insert([{
      titre: formData.titre,
      description: formData.description,
      prix: parseInt(formData.prix),
      ville: formData.ville,
      type: formData.type,
      chambres: parseInt(formData.chambres),
      salles_de_bain: parseInt(formData.salles_de_bain),
      surface: parseInt(formData.surface),
      image_url: formData.image_url,
      proprietaire_nom: formData.proprietaire_nom,
      telephone: formData.telephone
    }]);

    if (error) {
      setErreur('Erreur : ' + error.message);
      setLoading(false);
    } else {
      setSucces(true);
      setTimeout(() => navigate('/annonces'), 2000);
    }
  }

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Publier une annonce</h1>
        <p className="text-gray-500 mb-8">Remplissez les informations de votre logement</p>

        {erreur && (
          <div className="bg-red-50 text-red-600 px-4 py-3 rounded-lg mb-6">{erreur}</div>
        )}
        {succes && (
          <div className="bg-green-50 text-green-600 px-4 py-3 rounded-lg mb-6">
            Annonce publiee avec succes ! Redirection...
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm p-6 space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Titre</label>
            <input type="text" name="titre" value={formData.titre} onChange={handleChange} placeholder="Ex: Appartement moderne a Plateau" required className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Decrivez votre logement..." rows={4} required className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Prix mensuel (FCFA)</label>
              <input type="number" name="prix" value={formData.prix} onChange={handleChange} placeholder="150000" required className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
              <select name="type" value={formData.type} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Appartement</option>
                <option>Villa</option>
                <option>Studio</option>
                <option>Bureau</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Ville / Quartier</label>
            <input type="text" name="ville" value={formData.ville} onChange={handleChange} placeholder="Ex: Dakar, Plateau" required className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Chambres</label>
              <input type="number" name="chambres" value={formData.chambres} onChange={handleChange} placeholder="3" required className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Salles de bain</label>
              <input type="number" name="salles_de_bain" value={formData.salles_de_bain} onChange={handleChange} placeholder="2" required className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Surface (m2)</label>
              <input type="number" name="surface" value={formData.surface} onChange={handleChange} placeholder="120" required className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">URL photo</label>
            <input type="text" name="image_url" value={formData.image_url} onChange={handleChange} placeholder="https://exemple.com/photo.jpg" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Votre nom</label>
              <input type="text" name="proprietaire_nom" value={formData.proprietaire_nom} onChange={handleChange} placeholder="Mamadou Diallo" required className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Telephone</label>
              <input type="text" name="telephone" value={formData.telephone} onChange={handleChange} placeholder="+221 77 000 00 00" required className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
          </div>
          <button type="submit" disabled={loading} className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 font-medium disabled:opacity-50">
            {loading ? 'Publication en cours...' : 'Publier mon annonce'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PublierAnnonce;