import NavBarOrg from "../componentes/NavBarOrg";
import '../CssOrg/GaleriaModule.css';
import { Link } from 'react-router-dom';

export default function Galeria() {
    return (
        <div>
            <main className="content">
                <div className="top-bar">
                    <Link to="/pagina" className="btn-view">Ver Página</Link>
                </div>

                <section className="form-box">
                    <h2>Adicionar Imagem</h2>
                    <form>
                        <label htmlFor="titulo">Título</label>
                        <input id="titulo" type="text" placeholder="Digite o título da imagem" />

                        <label htmlFor="descricao">Descrição</label>
                        <textarea id="descricao" placeholder="Digite uma descrição"></textarea>

                        <label htmlFor="arquivo">Arquivo de Imagem</label>
                        <input id="arquivo" type="file" />

                        <button type="submit">Adicionar</button>
                    </form>
                </section>
            </main>
        </div>
    );
}
