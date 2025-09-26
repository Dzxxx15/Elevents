import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './componentes/Navbar';

import Home from './views/Home';
import Evento from './views/Eventos';
import Contato from './views/Contato';
import Organizador from './views/Organizador';
import Participante from './views/Participante';
import Login from './views/Login';
import CriarConta from './views/CriarConta';
import Assinatura from './views-organizador/Assinatura';
import Equipe from './views-organizador/Equipe';
import Configuracao from './views-organizador/Configuracao';
import EventosOrg from './views-organizador/EventosOrg';
import Galeria from './views-organizador/Galeria';
import HomeOrg from './views-organizador/HomeOrg';
import Localizacao from './views-organizador/Localizacao';
import Paginas from './views-organizador/Paginas';
import Relatorios from './views-organizador/Relatorios';

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/eventos" element={<Evento />} />    
        <Route path="/organizador" element={<Organizador />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/login" element={<Login />} />
        <Route path="/criarconta" element={<CriarConta />} />
        <Route path="/participante" element={<Participante />} />
        <Route path="/Assinatura" element={<Assinatura/>} />
        <Route path="/Configuracao" element={<Configuracao/>} />
        <Route path="/Equipe" element={<Equipe/>} />
        <Route path="/EventosOrg" element={<EventosOrg/>} />
        <Route path="/Galeria" element={<Galeria/>} />
        <Route path="/HomeOrg" element={<HomeOrg/>} />
        <Route path="/Localizacao" element={<Localizacao/>} />
        <Route path="/Paginas" element={<Paginas/>} />
        <Route path="/Relatorios" element={<Relatorios/>} />
      </Routes>
    </Router>
  );
}

export default App;
