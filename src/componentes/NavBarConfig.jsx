import { Link } from 'react-router-dom';

export default function NavBarConfig() {
    return (
        <div>
            <aside className="sidebar">
                <div className="logo">Meu Painel</div>
                <nav>
                    <ul>
                        <li><Link to="/">Dashboard</Link></li>
                        <li><Link to="/empresa" className="active">Empresa</Link></li>
                        <li><Link to="/funcionamento">Funcionamento</Link></li>
                        <li><Link to="/pagamento">Pagamento</Link></li>
                        <li><Link to="/perfil">Gerenciar Perfil</Link></li>
                    </ul>
                </nav>
            </aside>
        </div>
    )
}