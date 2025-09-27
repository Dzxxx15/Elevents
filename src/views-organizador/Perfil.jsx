import { Link } from "react-router-dom";
import NavBarConfig from "../componentes/NavBarConfig";
import '../CssOrg/PerfilModule.css';

export default function Perfil() {
    return (
        <div>
            <NavBarConfig />
            <main className="content">
                <div className="top-bar">
                    <Link to="/pagina" className="btn-view">Ver Página</Link>
                </div>

                <section className="form-box">
                    <h2>Gerenciar Perfil</h2>
                    <form>
                        <label>Nome do Usuário</label>
                        <input type="text" placeholder="Digite seu nome" />

                        <label>Email</label>
                        <input type="email" placeholder="Digite seu email" />

                        <label>Foto de Perfil</label>
                        <input type="file" />

                        <button type="submit">Salvar Alterações</button>
                    </form>
                </section>
            </main>
        </div>
    );
}
