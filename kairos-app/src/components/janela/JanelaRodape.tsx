import React, { ReactNode } from 'react';


interface IJanelaRodape {
    children: ReactNode;
}
  

const JanelaRodape: React.FC<IJanelaRodape> = ({ children }) => {
    return (
        <footer className='janela-footer'>
            {children}
        </footer>
    );
};


export { JanelaRodape };