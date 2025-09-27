import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Navbar público
import Navbar from './componentes/Navbar';

// Layout para organizador
import OrgLayout from './layouts/OrgLayout';


// Páginas públicas
import Home from './views/Home';
import Evento from './views/Eventos';
import Contato from './views/Contato';
import Login from './views/Login';
import CriarConta from './views/CriarConta';
import Participante from './views/Participante';
import Organizador from './views/Organizador';

// Páginas do organizador
import HomeOrg from './views-organizador/HomeOrg';
import Assinatura from './views-organizador/Assinatura';
import Equipe from './views-organizador/Equipe';
import Configuracao from './views-organizador/Configuracao';
import EventosOrg from './views-organizador/EventosOrg';
import Galeria from './views-organizador/Galeria';
import Localizacao from './views-organizador/Localizacao';
import Paginas from './views-organizador/Paginas';
import Relatorios from './views-organizador/Relatorios';

//Paginas config
import ConfigLayout from './layouts/ConfigLayout';
import Empresa from './views-organizador/Empresa';
import Funcionamento from './views-organizador/Funcionamento';
import Pagamento from './views-organizador/Pagamento';
import Perfil from './views-organizador/Perfil';
import Senha from './views-organizador/Senha';

function App() {
  return (
    <Router>
      <Routes>
        {/* PÁGINAS PÚBLICAS*/}
        <Route path="/" element={<><Navbar /><Home /></>} />
        <Route path="/home" element={<><Navbar /><Home /></>} />
        <Route path="/eventos" element={<><Navbar /><Evento /></>} />
        <Route path="/contato" element={<><Navbar /><Contato /></>} />
        <Route path="/login" element={<><Navbar /><Login /></>} />
        <Route path="/criarconta" element={<><Navbar /><CriarConta /></>} />
        <Route path="/participante" element={<><Navbar /><Participante /></>} />
         <Route path="/organizador" element={<><Navbar /><Organizador /></>} />


        {/*PÁGINAS ORGANIZADOR*/}
        <Route path="/homeorg" element={<OrgLayout><HomeOrg /></OrgLayout>} />
        <Route path="/assinatura" element={<OrgLayout><Assinatura /></OrgLayout>} />
        <Route path="/equipe" element={<OrgLayout><Equipe /></OrgLayout>} />
        <Route path="/eventosorg" element={<OrgLayout><EventosOrg /></OrgLayout>} />
        <Route path="/galeria" element={<OrgLayout><Galeria /></OrgLayout>} />
        <Route path="/localizacao" element={<OrgLayout><Localizacao /></OrgLayout>} />
        <Route path="/paginas" element={<OrgLayout><Paginas /></OrgLayout>} />
        <Route path="/relatorios" element={<OrgLayout><Relatorios /></OrgLayout>} />

        {/* PÁGINAS DE CONFIGURAÇÃO */}
        <Route path="/configuracao" element={<ConfigLayout><Configuracao /></ConfigLayout>} />
         <Route path="/funcionamento" element={<ConfigLayout><Funcionamento /></ConfigLayout>} />
        <Route path="/empresa" element={<ConfigLayout><Empresa /></ConfigLayout>} />
        <Route path="/pagamento" element={<ConfigLayout><Pagamento /></ConfigLayout>} />
        <Route path="/perfil" element={<ConfigLayout><Perfil /></ConfigLayout>} />
        <Route path="/senha" element={<ConfigLayout><Senha /></ConfigLayout>} />

      </Routes>
    </Router>
  );
}

export default App;
