import React from 'react';
import NavBarOrg from '../componentes/NavBarOrg';
import '../CssOrg/OrgLayoaut.css';

export default function OrgLayout({ children }) {
  return (
    <div className="org-layout">
      <NavBarOrg />

      {/* Área principal do conteúdo */}
      <main className="org-content">
        {children}
      </main>
    </div>
  );
}
