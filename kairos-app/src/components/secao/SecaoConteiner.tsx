import './Secao.css';
import React, { ReactNode } from 'react';


interface ISecaoConteiner extends React.HTMLAttributes<HTMLDivElement> {
    banner?: boolean;
    children: ReactNode;
}
  

const Secao: React.FC<ISecaoConteiner> = ({ banner, children, ...resto }) => {
    return (
        <section className='secao-conteiner' style={ banner ? {minHeight: '500px'} : {} } { ...resto }>
            <div className='secao-conteudo'>
                {children}
            </div>
        </section>
    );
};


export { Secao };
