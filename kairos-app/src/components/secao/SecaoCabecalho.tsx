import React, { ReactNode } from 'react';
import { Divisor } from '../divisor/Divisor';


interface ISecaoCabecalho extends React.HTMLAttributes<HTMLHeadingElement> {
    titulo: string;
    children?: ReactNode;
}


const SecaoCabecalho: React.FC<ISecaoCabecalho> = ({ titulo, children, ...resto }) => {
    return (
        <header className='secao-cabecalho-conteiner'>
            <div className='secao-cabecalho-conteudo'>
                <h2 { ...resto }>{ titulo }</h2>
                <nav>{ children }</nav>
            </div>
            <Divisor cor='#909090'/>
        </header>
    );
};


export { SecaoCabecalho };
