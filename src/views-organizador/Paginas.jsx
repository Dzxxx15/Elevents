import NavBarOrg from "../componentes/NavBarOrg";
import '../CssOrg/PaginasModule.css';
import { Link } from 'react-router-dom';

export default function Pagina() {
    return (
        <div>
            <main className="content">
                <h2>Página Personalizada</h2>
                <form className="form-box">
                    <label htmlFor="titulo">Título</label>
                    <input id="titulo" type="text" placeholder="Digite o título da página" />

                    <label htmlFor="conteudo">Conteúdo</label>
                    <textarea id="conteudo" placeholder="Digite o conteúdo da página"></textarea>

                    <button type="submit" className="btn">Salvar</button>
                </form>
            </main>
        </div>
    );
}
