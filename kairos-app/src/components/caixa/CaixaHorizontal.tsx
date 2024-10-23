import React, { ReactNode, HTMLAttributes } from 'react';


interface ICaixaHorizontal extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
}


const CaixaHorizontal: React.FC<ICaixaHorizontal> = ({ children, className = '', style, ...resto }) => {
    return (
        <div style={ style } { ...resto } className={ `caixa-horizontal ${ className }` }>
            { children }
        </div>
    );
}


export { CaixaHorizontal };
