import React from "react";
import { Link } from "react-router-dom";

function CriarConta() {
  return (
    <>
      <section className="card-container">
        <div className="card">
          <div className="card-header orange"></div>
          <div className="icon">
            <i className="fas fa-user"></i>
          </div>
          <h2>Organizador</h2>
          <ul className="card-body">
            <li>Administre seus Eventos com facilidade</li>
            <li>Reduza gastos com sistemas</li>
            <li>Reduza o tempo gasto no setup do evento</li>
          </ul>
          <Link to="/organizador" className="btn-orange">
            Organizador
          </Link>
        </div>

        <div className="card">
          <div className="card-header blue"></div>
          <div className="icon">
            <i className="fas fa-user"></i>
          </div>
          <h2>Participante</h2>
          <ul className="card-body">
            <li>Administre seus Eventos com facilidade</li>
            <li>Reduza gastos com sistemas</li>
            <li>Reduza o tempo gasto no setup do evento</li>
          </ul>
          <Link to="/participante" className="btn-blue">
            Participante
          </Link>
        </div>
      </section>

      <footer>
        <p>&copy; Elevents</p>
      </footer>
    </>
  );
}

export default CriarConta;
