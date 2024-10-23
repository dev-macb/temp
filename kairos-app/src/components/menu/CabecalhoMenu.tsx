import React, { ReactNode } from 'react';


interface ICabecalhoMenu {
    children: ReactNode;
    brecha?: string;
}


const CabecalhoMenu: React.FC<ICabecalhoMenu> = ({ children, brecha = '50px' }) => {
    return (
        <ul className='cabecalho-menu' style={{ gap: brecha }}>
            { children }
        </ul>
    );
};


export { CabecalhoMenu };
