import NavBarOrg from "../componentes/NavBarOrg";
import '../CssOrg/LocalizacaoModule.css';
import { Link } from 'react-router-dom';

export default function Localizacoes() {
    return (
        <div>
            <main className="content">
                <h2>Localizações</h2>
                <div className="location-list">
                    <div className="location">
                        <h3>Arena Central</h3>
                        <p>Rua Principal, 123 - São Paulo</p>
                    </div>
                    <div className="location">
                        <h3>Centro de Convenções</h3>
                        <p>Avenida das Nações, 456 - Rio de Janeiro</p>
                    </div>
                </div>
                <button className="btn">Adicionar Localização</button>
            </main>
        </div>
    );
}
