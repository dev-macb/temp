import React, { ReactNode, HTMLAttributes } from 'react';


interface ICaixaVertical extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
}


const CaixaVertical: React.FC<ICaixaVertical> = ({ children, className = '', style, ...resto }) => {
    return (
        <div style={ style } { ...resto } className={ `caixa-vertical ${ className }` }>
            { children }
        </div>
    );
}


export { CaixaVertical };

