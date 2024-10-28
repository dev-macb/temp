import './Tabela.css';
import React, { useState } from 'react';
import { Janela } from '../janela/Janela';

interface IDados {
    [key: string]: any;
}

interface INomeColunas {
    chave: string;
    textoCabecalho: string;
    elemento?: (valor: any, row: IDados) => React.ReactNode;
}

interface ITabela {
    dados: IDados[];
    nomeColunas?: INomeColunas[];
}

const Tabela2: React.FC<ITabela> = ({ dados, nomeColunas }) => {
    const [administradorSelecionado, editarAdministradorSelecionado] = useState<IDados | undefined>(undefined);

    const selecionarAdministrador = (row: IDados) => {
        editarAdministradorSelecionado(row);
    };

    const fecharModal = () => {
        editarAdministradorSelecionado(undefined);
    };

    if (dados.length === 0) {
        return (
            <div style={{ width: '100%', borderRadius: '10px', border: '1px solid #909090', backgroundColor: '#F1F1F1' }}>
                <table style={{ width: '100%', borderRadius: '10px', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr>
                            <th style={{borderBottom: '1px solid #909090', padding: '10px 20px', color: '#606060', textAlign: 'start' }}>Erro!</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{ padding: '10px 20px', color: '#606060', textAlign: 'center' }}>Não há dados disponíveis.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }

    const cabecalhoPadrao = Object.keys(dados[0]);
    const textoCabecalho = nomeColunas || cabecalhoPadrao.map(chave => ({ chave, textoCabecalho: chave }));

    return (
        <div style={{ width: '100%' }}>
            <div style={{ borderRadius: '10px', border: '1px solid #909090', backgroundColor: '#F1F1F1' }}>
                <table style={{ width: '100%', borderRadius: '10px', borderCollapse: 'collapse', marginBottom: '20px'}}>
                    <thead>
                        <tr>
                            <th style={{borderBottom: '1px solid #909090', padding: '10px 20px', color: '#606060', textAlign: 'start' }}>#</th>
                            {textoCabecalho.map(column => (
                                <th key={ column.chave } style={{borderBottom: '1px solid #909090', padding: '10px 20px', color: '#606060', textAlign: 'start' }}>
                                    { column.textoCabecalho }
                                </th>
                            ))}
                        </tr>
                    </thead>

                    <tbody>
                        {dados.map((row, index) => (
                            <tr key={ index } onClick={() => selecionarAdministrador(row)}>
                                <td style={{borderBottom: '1px solid #909090', padding: '10px 20px', color: '#606060', textAlign: 'start' }}>{ index + 1 }</td>
                                {textoCabecalho.map(column => (
                                    <td key={ column.chave } style={{borderBottom: '1px solid #909090', padding: '10px 20px', color: '#606060', textAlign: 'start', height: '50px' }}>
                                        {column.elemento 
                                            ? column.elemento(row[column.chave], row) 
                                            : row[column.chave]}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px'}}>
                <span>1-10 de 1000</span>
                <div>
                    <button>Anterior</button>
                    <button>Próximo</button>
                </div>
            </div>
        </div>
    );
};

export { Tabela2 };