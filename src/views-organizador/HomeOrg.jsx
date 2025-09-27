import { Link } from "react-router-dom";   // 👈 faltava isso
import NavBarOrg from "../componentes/NavBarOrg";
import '../CssOrg/HomeOrgModule.css';

export default function HomeOrg() {
    return (
        <div>
            <main className="content">
                <div className="top-bar">
                    <Link to="/pagina" className="btn-view">Ver Página</Link>
                </div>

                <section className="stats">
                    <div className="stat-card">
                        <h3>Eventos</h3>
                        <p>12 ativos</p>
                    </div>
                    <div className="stat-card">
                        <h3>Equipe</h3>
                        <p>8 membros</p>
                    </div>
                    <div className="stat-card">
                        <h3>Localizações</h3>
                        <p>5 cadastradas</p>
                    </div>
                </section>

                <section className="chart-section">
                    <canvas id="visitasChart"></canvas>
                </section>
            </main>
        </div>
    );
}
