import { NavLink } from "react-router-dom";

const NavBarConfig = () => {
  return (
    <aside className="sidebar">
      <div className="logo">Meu Painel</div>
      <nav>
        <ul>
          <li>
            <NavLink to="/HomeOrg" className={({ isActive }) => (isActive ? "active" : "")}>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/Empresa" className={({ isActive }) => (isActive ? "active" : "")}>
              Empresa
            </NavLink>
          </li>
          <li>
            <NavLink to="/Funcionamento" className={({ isActive }) => (isActive ? "active" : "")}>
              Funcionamento
            </NavLink>
          </li>
          <li>
            <NavLink to="/Pagamento" className={({ isActive }) => (isActive ? "active" : "")}>
              Pagamento
            </NavLink>
          </li>
          <li>
            <NavLink to="/Perfil" className={({ isActive }) => (isActive ? "active" : "")}>
              Gerenciar Perfil
            </NavLink>
          </li>
          <li>
            <NavLink to="/Senha" className={({ isActive }) => (isActive ? "active" : "")}>
              Alterar Senha
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default NavBarConfig;
