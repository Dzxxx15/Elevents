import Footer from "../componentes/Footer"
import ImgHome from "../assets/ImgHome.png"
import '../Css/HomeModule.css';

function Home() {
  const src = ImgHome

  return (
    <>
      <section className="introdução">
        <div className="introdução-texto">
          <p className="subtitulo">Uma Plataforma Para Qualquer Negócio</p>
          <h1>
            Ferramenta de<br />
            eventos inteligente para<br />
            expandir seu negócio<br />
            online
          </h1>
          <p className="descricao">
            Simplifica a administração de eventos, ajudando você a<br />
            gerenciar negócios de maneira inteligente.
          </p>
        </div>
        <div className="introdução-imagem">
          <img src={src} alt="Imagem de introdução" />
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Home
