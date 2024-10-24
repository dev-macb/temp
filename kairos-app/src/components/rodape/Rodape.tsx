import './Rodape.css';
import React, { ReactNode } from 'react';


interface IRodape {
    divisor?: boolean;
    textoCopyright?: string;
    linkCopyright?: string;
    corFundo?: string;
    corFundoCopyright?: string;
    children: ReactNode;
}


const Rodape: React.FC<IRodape> = ({ divisor = true, textoCopyright, linkCopyright, corFundo = 'var(--cor-background-claro)', corFundoCopyright = 'var(--cor-texto-escuro)', children }) => {
    return (
        <footer style={{ borderTop: divisor ? '1px solid var(--cor-texto)' : '', backgroundColor: corFundo }} className='rodape-container'>
            <div className='rodape-conteudo'>
                { children }
            </div>
            <address style={{ backgroundColor: corFundoCopyright }} className='rodape-copyright'>
                <small>
                    <a href={ linkCopyright } target="_blank" rel="noopener noreferrer">
                        { textoCopyright }
                    </a>
                </small>
            </address>
        </footer>
    );
}


export { Rodape };
