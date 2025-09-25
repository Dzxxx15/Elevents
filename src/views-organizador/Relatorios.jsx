import NavBarOrg from "../componentes/NavBarOrg";

export default function Relatorios() {
    return (
        <div>
            <NavBarOrg />
            <main className="content">
                <h2>Relatórios — Adicionar / Gerenciar</h2>

                <section className="report-form">
                    <label htmlFor="reportTitle">Título</label>
                    <input
                        id="reportTitle"
                        type="text"
                        placeholder="Ex: Relatório Mensal - Ago/2025"
                    />

                    <label htmlFor="reportDate">Data</label>
                    <input id="reportDate" type="date" />

                    <label htmlFor="reportDesc">Descrição</label>
                    <textarea
                        id="reportDesc"
                        rows="3"
                        placeholder="Breve descrição"
                    ></textarea>

                    <label htmlFor="reportFile">Anexo (opcional)</label>
                    <input id="reportFile" type="file" />

                    <button id="addReportBtn" className="btn">
                        Adicionar Relatório
                    </button>
                </section>

                <section>
                    <h3>Relatórios adicionados</h3>
                    <table id="reportsTable" className="table">
                        <thead>
                            <tr>
                                <th>Título</th>
                                <th>Data</th>
                                <th>Descrição</th>
                                <th>Anexo</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody></tbody>
                    </table>
                </section>
            </main>
        </div>
    );
}
