import { Link } from "react-router-dom";
import NavBarConfig from "../componentes/NavBarConfig";
import '../CssOrg/EmpresaModule.css';

export default function ConfigEmpresa() {
    return (
        <div>
            <NavBarConfig />
            <main className="content">
                <div className="top-bar">
                    <Link to="/pagina" className="btn-view">Ver Página</Link>
                </div>

                <section className="form-box">
                    <h2>Configurações da Empresa</h2>
                    <form>
                        <label>Nome da Empresa</label>
                        <input type="text" placeholder="Digite o nome" />

                        <label>E-mail</label>
                        <input type="email" placeholder="Digite o e-mail" />

                        <label>Telefone</label>
                        <input type="text" placeholder="Digite o telefone" />

                        <label>Endereço</label>
                        <input type="text" placeholder="Digite o endereço" />

                        <button type="submit">Salvar</button>
                    </form>
                </section>
            </main>
        </div>
    );
}
