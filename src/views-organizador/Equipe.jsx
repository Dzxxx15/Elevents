import NavBarOrg from "../componentes/NavBarOrg";
import '../CssOrg/EquipeModule.css';
import { Link } from 'react-router-dom';

export default function Equipe() {
    return (
        <div>
            <div className="app">
                <main className="content">
                    <h2>Equipe</h2>
                    <div className="team-list">
                        <div className="member">
                            <h3>João Silva</h3>
                            <p>Administrador</p>
                        </div>
                        <div className="member">
                            <h3>Maria Souza</h3>
                            <p>Gerente de Eventos</p>
                        </div>
                        <div className="member">
                            <h3>Lucas Pereira</h3>
                            <p>Financeiro</p>
                        </div>
                    </div>
                    <button className="btn">Adicionar Membro</button>
                </main>
            </div>
        </div>
    );
}
