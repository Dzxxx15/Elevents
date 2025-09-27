import { Link } from "react-router-dom";
import NavBarConfig from "../componentes/NavBarConfig";
import '../CssOrg/FuncionamentoModule.css';

export default function Funcionamento() {
    return (
        <div>
            <main className="content">
                <div className="top-bar">
                    <Link to="/pagina" className="btn-view">Ver Página</Link>
                </div>

                <section className="form-box">
                    <h2>Configurações de Funcionamento</h2>
                    <form>
                        <label>Horário de Abertura</label>
                        <input type="time" />

                        <label>Horário de Fechamento</label>
                        <input type="time" />

                        <label>Dias de Funcionamento</label>
                        <select multiple>
                            <option>Segunda-feira</option>
                            <option>Terça-feira</option>
                            <option>Quarta-feira</option>
                            <option>Quinta-feira</option>
                            <option>Sexta-feira</option>
                            <option>Sábado</option>
                            <option>Domingo</option>
                        </select>

                        <button type="submit">Salvar</button>
                    </form>
                </section>
            </main>
        </div>
    );
}
