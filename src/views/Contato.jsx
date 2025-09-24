import Footer from '../componentes/Footer';
import '../Css/ContatoModule.css';


function Contato() {

  return (
    <>
      <div className="background-decor">
        <div className="bolas-inferior">
          <div className="bola"></div>
          <div className="bola"></div>
        </div>
        <div className="bolas-superior">
          <div className="bola"></div>
          <div className="bola"></div>
        </div>

        <section id="contact" className="section">
          <h2>Entrar em contato</h2>
          <form className="contact-form" action="#" method="POST">
            <div className="coluna">
              <div className="group">
                <label htmlFor="name">Nome Completo:</label>
                <input
                  type="text"
                  id="name"
                  required
                  placeholder="Seu nome"
                />
              </div>
              <div className="group">
                <label htmlFor="email">E-mail:</label>
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="Seu e-mail"
                />
              </div>
            </div>

            <label htmlFor="message">Mensagem:</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              placeholder="Escreva sua mensagem"
            ></textarea>

            <button type="submit">Enviar</button>
          </form>
        </section>
        <Footer />
      </div>
    </>
  )
}

export default Contato