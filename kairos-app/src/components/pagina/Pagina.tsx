import './Pagina.css';
import React, { ReactNode } from 'react';

interface IPagina {
    children: ReactNode;
}

const Pagina: React.FC<IPagina> = ({ children }) => {
    return (
        <main>
            { children }
        </main>
    );
}

export { Pagina };