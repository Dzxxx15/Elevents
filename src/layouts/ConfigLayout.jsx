import React from "react";
import NavBarConfig from "../componentes/NavBarConfig";
import "../CssOrg/ConfigLayout.css"; // CSS específico para o layout de configuração

export default function ConfigLayout({ children }) {
  return (
    <div className="config-layout">
      {/* Sidebar de configuração */}
      <NavBarConfig />

      {/* Área principal do conteúdo */}
      <main className="config-content">
        {children}
      </main>
    </div>
  );
}
