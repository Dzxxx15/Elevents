import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BottonPainel from './BottonPainel';
import '../Css/NavbarModule.css';
import Logo from "../assets/Logo.png"

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const toggleMenu = () => setIsMobile(!isMobile);
  const src = Logo
  

  return (
    <header>
      <div className="gamestation">
        <h2 className="elevents">Elevents</h2>
      </div>

      <nav className="navbar">
        <div className="logo">
          <Link to="/home">
            <img src={src} />
          </Link>
        </div>

        <ul className={`nav-links ${isMobile ? 'active' : ''}`}>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/eventos">Eventos</Link></li>
          <li><Link to="/contato">Contato</Link></li>
        </ul>

        <div className="button-login">
          <Link to="/login" className="btn-cinza">Entrar</Link>
          <Link to="/criarconta" className="btn-laranja">Criar Conta</Link>

          {/* Botão Olá, Diego */}
          <BottonPainel />
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
