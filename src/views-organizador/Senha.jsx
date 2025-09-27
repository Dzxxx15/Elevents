import { Link } from "react-router-dom";
import NavBarConfig from "../componentes/NavBarConfig";
import '../CssOrg/SenhaModule.css';


export default function Senha() {
    return (
        <div>
            <main className="content">
                <div className="top-bar">
                    <Link to="/pagina" className="btn-view">Ver Página</Link>
                </div>

                <section className="form-box">
                    <h2>Alterar Senha</h2>
                    <form>
                        <label>Senha Atual</label>
                        <input type="password" placeholder="Digite sua senha atual" />

                        <label>Nova Senha</label>
                        <input type="password" placeholder="Digite sua nova senha" />

                        <label>Confirmar Nova Senha</label>
                        <input type="password" placeholder="Confirme sua nova senha" />

                        <button type="submit">Atualizar Senha</button>
                    </form>
                </section>
            </main>
        </div>
    );
}
