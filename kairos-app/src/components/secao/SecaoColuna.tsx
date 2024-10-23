import React, { ReactNode } from 'react';


interface ISecaoColuna extends React.HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
}
  

const SecaoColuna: React.FC<ISecaoColuna> = ({ children, ...resto }) => {
    return (
        <div className='secao-coluna' { ...resto }>
            { children }
        </div>
    );
};


export { SecaoColuna };
