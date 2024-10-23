import React, { ReactNode } from 'react';


interface ISecaoLinha extends React.HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
}
  

const SecaoLinha: React.FC<ISecaoLinha> = ({ children, ...rest }) => {
    return (
        <div className='secao-linha' { ...rest }>
            { children }
        </div>
    );
};


export { SecaoLinha };
