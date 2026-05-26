import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Accueil from './pages/Accueil';
import Annonces from './pages/Annonces';
import DetailLogement from './pages/DetailLogement';
import Inscription from './pages/Inscription';
import Connexion from './pages/Connexion';
import PublierAnnonce from './pages/PublierAnnonce';

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/annonces" element={<Annonces />} />
            <Route path="/annonces/:id" element={<DetailLogement />} />
            <Route path="/inscription" element={<Inscription />} />
            <Route path="/connexion" element={<Connexion />} />
            <Route path="/publier" element={<PublierAnnonce />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;