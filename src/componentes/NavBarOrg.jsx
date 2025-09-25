import { NavLink } from "react-router-dom";

export default function NavBarOrg() {
  return (
    <aside className="sidebar">
      <div className="logo">ElEvents</div>
      <nav>
        <ul>
          <li>
            <NavLink to="/index" className={({ isActive }) => (isActive ? "active" : "")}>
              Painel
            </NavLink>
          </li>
          <li>
            <NavLink to="/assinatura" className={({ isActive }) => (isActive ? "active" : "")}>
              Assinatura
            </NavLink>
          </li>
          <li>
            <NavLink to="/eventos" className={({ isActive }) => (isActive ? "active" : "")}>
              Eventos
            </NavLink>
          </li>
          <li>
            <NavLink to="/equipe" className={({ isActive }) => (isActive ? "active" : "")}>
              Equipe
            </NavLink>
          </li>
          <li>
            <NavLink to="/localizacoes" className={({ isActive }) => (isActive ? "active" : "")}>
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
            <NavLink to="/pagina" className={({ isActive }) => (isActive ? "active" : "")}>
              Página
            </NavLink>
          </li>
          <li>
            <NavLink to="/configuracoes/empresa" className={({ isActive }) => (isActive ? "active" : "")}>
              Configurações
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
