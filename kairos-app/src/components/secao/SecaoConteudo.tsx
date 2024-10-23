import React, { ReactNode } from 'react';


interface ISecaoConteudo extends React.HTMLAttributes<HTMLDivElement> {
    titulo?: string;
    children: ReactNode;
}
  
  
const SecaoConteudo: React.FC<ISecaoConteudo> = ({ titulo, children, ...rest }) => {
    return (
        <div className='secao-conteudo-conteiner' { ...rest }>
             <div className='secao-conteudo-conteudo'>
                { titulo && 
                    <header className='secao-conteudo-cabecalho'>
                        <h3>{ titulo }</h3>
                    </header>
                }
                <div className='secao-conteudo-principal'>
                    {children}
                </div>
            </div>
        </div>
    );
};


export { SecaoConteudo };
