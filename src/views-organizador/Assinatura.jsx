import NavBarOrg from "../componentes/NavBarOrg";
import '../CssOrg/AssinaturaModule.css';
import { Link } from 'react-router-dom';

export default function Assinatura() {
    return (
        <div>
            <div className="app">
                <main className="content">
                    <h2>Plano de Assinatura</h2>
                    <div className="plan">
                        <h3>Plano Premium</h3>
                        <p>Recursos ilimitados para seus eventos.</p>
                        <p><strong>R$ 99,90 / mês</strong></p>
                        <button className="btn">Gerenciar Assinatura</button>
                    </div>
                </main>
            </div>
        </div>
    );
}
