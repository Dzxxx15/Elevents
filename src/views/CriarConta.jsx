import React from "react";
import { Link } from "react-router-dom";
import '../Css/CriarContaModule.css';
import Footer from "../componentes/Footer";

// ✅ Importar imagem do ícone
import account from '../assets/user.png'; // verifique se está realmente em: /src/assets/account.png

function CriarConta() {
  return (
    <>
      <section className="card-container">
        <div className="card">
          <div className="card-header orange">
            <div className="icon-wrapper">
              <img src={account} alt="User Icon" className="user-icon" />
            </div>
            <h2>Organizador</h2>
          </div>

          <ul className="card-body">
            <li>Administre seus Eventos com facilidade</li>
            <li>Reduza gastos com sistemas</li>
            <li>Reduza o tempo gasto no setup do evento</li>
          </ul>

          <Link to="/organizador" className="btn-orange">
            Organizar
          </Link>
        </div>

        <div className="card">
          <div className="card-header blue">
            <div className="icon-wrapper">
              <img src={account} alt="User Icon" className="user-icon" />
            </div>
            <h2>Participante</h2>
          </div>

          <ul className="card-body">
            <li>Encontre os melhores lugares para se divertir em um clique</li>
            <li>Pagamento Direto no Site</li>
            <li>QR-code para validar sua entrada</li>
          </ul>

          <Link to="/participante" className="btn-blue">
            Participar
          </Link>
        </div>
      </section>
    </>
  );
}

export default CriarConta;
