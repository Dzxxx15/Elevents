import React, { useState } from "react";
import { Link } from 'react-router-dom';

import "../Css/LoginModule.css";
import Entrar from "../assets/Entrar.png"
import LogoEntrar from "../assets/LogoEntrar.png"
import Logo from "../assets/Logo.png"


const src = Entrar
const src2 = LogoEntrar;
const src3 = Logo;

export default function Login() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Usuário:", usuario);
    console.log("Senha:", senha);

  };

  return (
    <>
      <div className="container">
        <div className="lado-esquerdo">
          <img src={src} alt="Fundo geométrico" className="Geometricoimage" />
        </div>

        <div className="lado-direito">
          <div className="login-box">
            <div className="logo-container">
              <img src={src2} alt="Logo Elevents" className="logo-elevents" />
              <img src={src3} alt="Logo Elefante" className="logo-elefante" />
            </div>

            <p className="texto-login">
              Faça login em sua <strong>Elevents</strong> conta
            </p>

            <form onSubmit={handleSubmit}>
              <label htmlFor="usuario">Usuário</label>
              <input
                type="text"
                id="usuario"
                placeholder="Digite o email ou nome de usuário"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
              />

              <label htmlFor="senha">Senha</label>
              <input
                type="password"
                id="senha"
                placeholder="Digite a senha do usuário"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />

              <button type="submit">Entrar</button>
              <Link to="/esqueceu-senha" className="esqueceu-senha">Perdeu a Senha?</Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
