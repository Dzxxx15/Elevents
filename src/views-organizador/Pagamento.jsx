import { Link } from "react-router-dom";
import '../CssOrg/PagamentoModule.css'; 

export default function Pagamento() {
    return (
        <div>
            <main className="content">
                <div className="top-bar">
                    <Link to="/pagina" className="btn-view">Ver Página</Link>
                </div>

                <section className="form-box">
                    <h2>Configurações de Pagamento</h2>
                    <form>
                        <label>Método de Pagamento</label>
                        <select>
                            <option>Cartão de Crédito</option>
                            <option>Pix</option>
                            <option>Boleto</option>
                            <option>Transferência Bancária</option>
                        </select>

                        <label>Chave Pix</label>
                        <input type="text" placeholder="Digite sua chave Pix" />

                        <label>Conta Bancária</label>
                        <input type="text" placeholder="Agência e Conta" />

                        <button type="submit">Salvar</button>
                    </form>
                </section>
            </main>
        </div>
    );
}
