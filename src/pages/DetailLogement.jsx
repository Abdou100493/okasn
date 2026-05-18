import React from 'react';
import { useParams, Link } from 'react-router-dom';

const logements = [
  { id: 1, titre: "Appartement moderne a Plateau", prix: 150000, ville: "Dakar, Plateau", chambres: 3, type: "Appartement", image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800", description: "Bel appartement moderne situe au coeur du Plateau. Lumineux, bien ventile, avec une vue degagee.", surface: 120, sallesDeBain: 2, proprietaire: "Mamadou Diallo", telephone: "+221771234567" },
  { id: 2, titre: "Villa avec jardin a Almadies", prix: 450000, ville: "Dakar, Almadies", chambres: 5, type: "Villa", image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800", description: "Magnifique villa avec grand jardin et piscine aux Almadies. Quartier residentiel calme et securise.", surface: 350, sallesDeBain: 4, proprietaire: "Fatou Ndiaye", telephone: "+221769876543" },
  { id: 3, titre: "Studio meuble a Mermoz", prix: 80000, ville: "Dakar, Mermoz", chambres: 1, type: "Studio", image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800", description: "Studio entierement meuble a Mermoz. Parfait pour un etudiant ou un jeune professionnel.", surface: 35, sallesDeBain: 1, proprietaire: "Ibrahima Sow", telephone: "+221704567890" },
  { id: 4, titre: "Appartement a Sacre-Coeur", prix: 200000, ville: "Dakar, Sacre-Coeur", chambres: 4, type: "Appartement", image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800", description: "Grand appartement familial a Sacre-Coeur. Quartier calme et residentiel.", surface: 180, sallesDeBain: 2, proprietaire: "Aissatou Ba", telephone: "+221773210987" },
  { id: 5, titre: "Villa a Thies Centre", prix: 180000, ville: "Thies, Centre", chambres: 4, type: "Villa", image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800", description: "Belle villa au centre de Thies. Spacieuse avec cour interieure.", surface: 200, sallesDeBain: 3, proprietaire: "Ousmane Diop", telephone: "+221766543210" },
  { id: 6, titre: "Studio a Saint-Louis", prix: 60000, ville: "Saint-Louis", chambres: 1, type: "Studio", image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800", description: "Studio cosy dans la ville historique de Saint-Louis. Proche du fleuve.", surface: 30, sallesDeBain: 1, proprietaire: "Mariama Toure", telephone: "+221701112233" }
];

function DetailLogement() {
  const { id } = useParams();
  const logement = logements.find(function(l) { return l.id === parseInt(id); });

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
          src={logement.image}
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
                <div className="text-xl">Chambres</div>
                <div className="font-semibold">{logement.chambres}</div>
              </div>
              <div className="text-center">
                <div className="text-xl">Salles de bain</div>
                <div className="font-semibold">{logement.sallesDeBain}</div>
              </div>
              <div className="text-center">
                <div className="text-xl">Surface</div>
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
                {logement.proprietaire.charAt(0)}
              </div>
              <div>
                <div className="font-medium text-gray-800">{logement.proprietaire}</div>
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
