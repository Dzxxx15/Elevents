import NavBarOrg from "../componentes/NavBarOrg";
import '../Css/EventoModule.css';

export default function Eventos() {
    return (
        <div>
            <NavBarOrg />
            <main className="content">
                <h2>Eventos</h2>
                <div className="event-list">
                    <div className="event">
                        <h3>Show Sertanejo</h3>
                        <p>Data: 12/09/2025</p>
                        <p>Local: Arena Central</p>
                    </div>
                    <div className="event">
                        <h3>Feira de Tecnologia</h3>
                        <p>Data: 20/09/2025</p>
                        <p>Local: Centro de Convenções</p>
                    </div>
                </div>
                <button className="btn">Adicionar Evento</button>
            </main>
        </div>
    );
}
