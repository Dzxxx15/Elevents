import React from "react";
import Footer from "../componentes/Footer";

function Organizador() {
  return (
    <>
      <div className="registro-container">
        <div className="form-section">
          <h2>Registre a sua empresa</h2>
          <p>Informações Básicas, você pode adicionar mais tarde</p>

          <form className="registro-form">
            {/* Slug da empresa */}
            <div className="form-group">
              <label>
                <strong>Slug da Empresa (Relacionado à URL e não pode ser alterado) *</strong>
              </label>
              <div className="slug-group">
                <span>elevents.com/</span>
                <input type="text" required />
              </div>
            </div>

            {/* Nome da empresa */}
            <div className="form-group">
              <label>
                <strong>Nome da Empresa*</strong>
                <input type="text" placeholder="Nome da sua empresa" required />
              </label>
            </div>

            {/* Categorias */}
            <div className="form-group">
              <label>
                <strong>Categorias *</strong>
                <select required>
                  <option value="">Selecionar</option>
                  <option value="eventos">Eventos</option>
                  <option value="gastronomia">Gastronomia</option>
                  <option value="educacao">Educação</option>
                </select>
              </label>
            </div>

            {/* Email */}
            <div className="form-group">
              <label>
                <strong>Email *</strong>
                <input type="email" required />
              </label>
            </div>

            {/* Telefone */}
            <div className="form-group">
              <label>
                <strong>Telefone *</strong>
              </label>
              <div className="telefone-group">
                <select>
                  <option value="+55">+55</option>
                  <option value="+351">+351</option>
                </select>
                <input type="tel" placeholder="Número de Telefone" required />
              </div>
            </div>

            {/* Senha */}
            <div className="form-group">
              <label>
                <strong>Senha *</strong>
                <input type="password" required />
              </label>
            </div>

            <button type="submit">Registrar</button>
          </form>
        </div>

        {/* Preview */}
        <div className="preview-section">
          <div className="browser-mockup">
            <div className="browser-bar">https://elevents.com/</div>
            <div className="browser-content">
              <img
                src="https://elephants.com.br/logo.png"
                alt="Logo"
                className="logo"
              />
              <h1 className="logo-text">E L E V E N T S</h1>
              <div className="event-cards">
                <div className="card">Evento</div>
                <div className="card">Evento</div>
                <div className="card">Evento</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Organizador;
