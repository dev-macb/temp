import React, { ReactNode } from 'react';


interface IJanelaConteiner {
    aberto: boolean;
    children: ReactNode;
}
  

const JanelaConteiner: React.FC<IJanelaConteiner> = ({ aberto, children }) => {
    if (!aberto) { return null; }

    return (
        <div className='janela-sobreposicao'>
            <div className='janela-conteiner'>
                <div className='janela-conteudo'>
                    {children}
                </div>
            </div>
        </div>
    );
};


export { JanelaConteiner };