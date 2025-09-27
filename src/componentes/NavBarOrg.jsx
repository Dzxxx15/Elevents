import { NavLink } from "react-router-dom";
import '../CssOrg/NavBarOrgModule.css';

const NavBarOrg = () => {
  return (
    <aside className="sidebar">
      <div className="logo">ElEvents</div>
      <nav>
        <ul>
          <li>
            <NavLink to="/HomeOrg" className={({ isActive }) => (isActive ? "active" : "")}>
              Painel
            </NavLink>
          </li>
          <li>
            <NavLink to="/assinatura" className={({ isActive }) => (isActive ? "active" : "")}>
              Assinatura
            </NavLink>
          </li>
          <li>
            <NavLink to="/eventosorg" className={({ isActive }) => (isActive ? "active" : "")}>
              Eventos
            </NavLink>
          </li>
          <li>
            <NavLink to="/equipe" className={({ isActive }) => (isActive ? "active" : "")}>
              Equipe
            </NavLink>
          </li>
          <li>
            <NavLink to="/localizacao" className={({ isActive }) => (isActive ? "active" : "")}>
              Localizações
            </NavLink>
          </li>
          <li>
            <NavLink to="/relatorios" className={({ isActive }) => (isActive ? "active" : "")}>
              Relatórios
            </NavLink>
          </li>
          <li>
            <NavLink to="/galeria" className={({ isActive }) => (isActive ? "active" : "")}>
              Galeria
            </NavLink>
          </li>
          <li>
            <NavLink to="/paginas" className={({ isActive }) => (isActive ? "active" : "")}>
              Página
            </NavLink>
          </li>
          <li>
            <NavLink to="/configuracao" className={({ isActive }) => (isActive ? "active" : "")}>
              Configurações
            </NavLink>
            <li>
            <NavLink to="/home" className={({ isActive }) => (isActive ? "active" : "")}>
              Voltar
            </NavLink>
          </li>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default NavBarOrg;
