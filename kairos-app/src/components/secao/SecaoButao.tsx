// Importação de módulos
import React, { ReactNode } from 'react';


interface ISecaoButao extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icone?: string;
    children: ReactNode;
}


const SecaoButao: React.FC<ISecaoButao> = ({ icone, children, ...rest }) => {
    return (
        <button className='secao-cabecalho-butao' { ...rest }>
            { icone && <img src={ icone } alt='' /> }
            { children }
        </button>
    );
}


export { SecaoButao }; 
