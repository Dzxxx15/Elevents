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
      </Routes>
    </Router>
  );
}

export default App;
