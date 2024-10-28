import React, { ReactNode } from 'react';


interface IJanelaConteudo {
    children: ReactNode;
}
  
  
const JanelaConteudo: React.FC<IJanelaConteudo> = ({ children }) => {
    return (
        <div className='janela-main-content'>
            {children}
        </div>
    );
};


export { JanelaConteudo };
