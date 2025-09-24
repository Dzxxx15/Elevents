import React, { useState } from "react";
import '../Css/LoginModule.css';
import Footer from "../componentes/Footer";

function Login() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // evita o reload da página
    console.log("Usuário:", usuario);
    console.log("Senha:", senha);
    // aqui você pode integrar com API ou validar
  };

  return (
    <>
      <div className="container">
        <div className="lado-esquerdo"></div>

        <div className="lado-direito">
          <div className="login-box">
            <img src="img/logo.png" alt="Logo" className="logo" />
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
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Login;
