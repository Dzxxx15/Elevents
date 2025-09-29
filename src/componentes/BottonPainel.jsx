import React, { useState } from "react";
import { Link } from "react-router-dom";
import { User, ChevronDown } from "lucide-react"; // Ícones
import "../Css/BottonPainelModule.css";

export default function BottonPainel() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleUserMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="user-menu">
      <button className="user-button" onClick={toggleUserMenu}>
        <User size={18} color="white" className="icon-left" />
        <span className="user-name">Diego</span>
        <ChevronDown
          size={16}
          color="white"
          className={`icon-right ${menuOpen ? "rotate" : ""}`}
        />
      </button>

      <div className={`user-dropdown ${menuOpen ? "show" : ""}`}>
        <Link to="/homeorg">Painel</Link>
        <button onClick={() => alert("Saindo...")}>Sair</button>
      </div>
    </div>
  );
}
