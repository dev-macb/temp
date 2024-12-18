import React, { ReactNode } from 'react';


interface IJanelaCabecalho {
    btnFechar?: () => void;
    children: ReactNode;
}
  

const JanelaCabecalho: React.FC<IJanelaCabecalho> = ({ btnFechar, children }) => {
    return (
        <header className='janela-cabecalho'>
            <h3>{ children }</h3>
            { !!btnFechar && 
                <button title='Fechar' onClick={ btnFechar }>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 6L6 18" stroke="#33363F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6 6L18 18" stroke="#33363F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            }
        </header>
    );
};


export { JanelaCabecalho };
