import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Css/BottonPainelModule.css';

export default function BottonPainel() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleUserMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="user-menu">
      <button onClick={toggleUserMenu}>Olá, Diego</button>
      <div className={`user-dropdown ${menuOpen ? 'show' : ''}`}>
        <Link to="/homeorg">Painel</Link>
        <button onClick={() => alert("Saindo...")}>Sair</button>
      </div>
    </div>
  );
}
