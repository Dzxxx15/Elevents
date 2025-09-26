import React, { useState, useEffect } from 'react';
import NavBarOrg from '../componentes/NavBarOrg';

const STORAGE_KEY = 'reports_v1';

function Relatorios() {
    const [reports, setReports] = useState([]);
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [desc, setDesc] = useState('');
    const [file, setFile] = useState(null);

    // Carrega os relatórios do localStorage
    useEffect(() => {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) setReports(JSON.parse(raw));
    }, []);

    // Salva os relatórios no localStorage sempre que muda
    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(reports));
    }, [reports]);

    const escapeHtml = (s = '') =>
        String(s).replace(/[&<>"']/g, (m) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m]));

    const handleAddReport = async () => {
        if (!title.trim()) {
            alert('Informe o título do relatório.');
            return;
        }

        let fileData = null;
        let fileName = null;

        if (file) {
            fileName = file.name;
            try {
                fileData = await readFileAsDataURL(file);
            } catch (err) {
                console.error(err);
                alert('Erro ao ler o arquivo.');
                return;
            }
        }

        const newReport = {
            id: Date.now(),
            title: title.trim(),
            date,
            desc: desc.trim(),
            fileName,
            fileData
        };

        setReports([newReport, ...reports]);
        setTitle('');
        setDate('');
        setDesc('');
        setFile(null);
    };

    const handleDelete = (id) => {
        if (!window.confirm('Remover este relatório?')) return;
        setReports(reports.filter((r) => r.id !== id));
    };

    const handleDownload = (report) => {
        if (!report.fileData) {
            alert('Arquivo não encontrado.');
            return;
        }
        const a = document.createElement('a');
        a.href = report.fileData;
        a.download = report.fileName || 'relatorio';
        document.body.appendChild(a);
        a.click();
        a.remove();
    };

    const readFileAsDataURL = (file) =>
        new Promise((res, rej) => {
            const fr = new FileReader();
            fr.onload = () => res(fr.result);
            fr.onerror = rej;
            fr.readAsDataURL(file);
        });

    return (
        <div>
            <NavBarOrg />
            <h2>Adicionar Relatório</h2>
            <div>
                <input
                    id="reportTitle"
                    type="text"
                    placeholder="Título"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    id="reportDate"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
                <input
                    id="reportDesc"
                    type="text"
                    placeholder="Descrição"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                />
                <input
                    id="reportFile"
                    type="file"
                    onChange={(e) => setFile(e.target.files[0])}
                />
                <button id="addReportBtn" onClick={handleAddReport}>Adicionar</button>
            </div>

            <h2>Relatórios</h2>
            <table id="reportsTable" border="1">
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Data</th>
                        <th>Descrição</th>
                        <th>Arquivo</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {reports.length === 0 ? (
                        <tr><td colSpan="5">Nenhum relatório adicionado.</td></tr>
                    ) : (
                        reports.map((r) => (
                            <tr key={r.id}>
                                <td>{escapeHtml(r.title)}</td>
                                <td>{r.date || ''}</td>
                                <td>{escapeHtml(r.desc || '')}</td>
                                <td>
                                    {r.fileName ? (
                                        <button onClick={() => handleDownload(r)}>Baixar</button>
                                    ) : '-'}
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(r.id)}>Remover</button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default Relatorios;
