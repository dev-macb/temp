import React, { ReactNode, useState } from 'react';
import { Janela } from '../janela/Janela';
import { TabelaRodape } from './TabelaRodape';
import { Butao } from '../butao/Butao';
import { FormatarDataService } from '../../services/FormatarDataService';
import { Entrada } from '../entrada/Entrada';

interface IDados {
    [key: string]: any;
}

interface ITabelaConteiner {
    dados: IDados[];
    children: ReactNode
}

const TabelaConteiner: React.FC<ITabelaConteiner> = ({ dados, children }) => {
    const [linhaSelecionada, editarLinhaSelecionada] = useState<IDados | undefined>(undefined);

    const selecionarLinha = (row: IDados) => {
        // Atualize o estado com os dados da linha clicada
        editarLinhaSelecionada(row);
    };

    const fecharModal = () => {
        editarLinhaSelecionada(undefined);
    }
    
    if (dados.length === 0) {
        return (
            <div className='tabela-conteiner'>
                <table className="tabela-conteudo">
                    <thead>
                        <tr><th style={{ color: '#E33437' }}>Erro!</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>Não há dados disponíveis.</td></tr>
                    </tbody>
                </table>
            </div>
        );
    }
    
    return (
        <div style={{display: 'flex', gap: '20px', flexDirection: 'column'}}>

        
            <div className='tabela-conteiner'>
                <table className="tabela-conteudo">
                    <thead>
                        <tr>
                            <th>#</th>
                            {React.Children.map(children, (child: any) => (
                                <th id={child.props.campo}>{child.props.cabecalho}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {dados.map((linha, index) => (
                            <tr key={ index } onClick={() => selecionarLinha(linha)}>
                                <td>{ index + 1 }</td>
                                {React.Children.map(children, (child: any) => {
                                    if (child) {
                                        const conteudoCelula = linha[child.props.campo];
                                        return <td>{child.props.corpoCelula ? child.props.corpoCelula(conteudoCelula) : conteudoCelula}</td>
                                    }
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>
                {linhaSelecionada && (

                    <Janela.Conteiner aberto={true}>
                        <Janela.Cabecalho btnFechar={fecharModal}>
                            Administrador
                        </Janela.Cabecalho>
                        <Janela.Conteudo>
                            <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
                                <span style={{color: '#909090'}}><strong>id: </strong>{ dados[0].id }</span>
                                <Entrada
                                    dinamico
                                    type="text"
                                    titulo="Cargo"
                                    value={ dados[0].cargo }
                                    required
                                />
                                <Entrada
                                    dinamico
                                    type="text"
                                    titulo="Apelido"
                                    value={ dados[0].apelido }
                                    required
                                />
                                <Entrada
                                    dinamico
                                    type="text"
                                    titulo="E-mail"
                                    value={ dados[0].email }
                                    required
                                />
                                <div style={{display: 'flex', flexDirection: 'row', gap: '20px'}}>
                                    <Entrada
                                        dinamico
                                        type="password"
                                        titulo="Senha"
                                        value={ dados[0].senha }
                                        required
                                    />
                                    <Entrada
                                        dinamico
                                        type="password"
                                        titulo="Confirmar Senha"
                                        value={ dados[0].senha }
                                        required
                                    />
                                </div>
                                
                                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <span style={{color: '#909090', fontSize: '0.8em'}}><strong>Criado em: </strong>{ FormatarDataService(dados[0].criado_em, true) }</span>
                                    <span style={{color: '#909090', fontSize: '0.8em'}}><strong>Atualizado em: </strong>{ FormatarDataService(dados[0].atualizado_em, true) }</span>
                                </div>
                                
                            </div>
                            
                        </Janela.Conteudo>

                        <Janela.Rodape>
                            <div style={{gap: '20px', display: 'flex'}}>
                                <Butao tipo='risco' contorno>Excluir</Butao>
                                <Butao >Salvar</Butao>
                            </div>
                            
                        </Janela.Rodape>
                    </Janela.Conteiner>
  
                )}
            </div>

            <TabelaRodape dados={dados} />
            
        </div>
    );
};

export { TabelaConteiner };