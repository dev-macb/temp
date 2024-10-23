import React from 'react';


interface ICabecalhoItemMenu {
    texto: string;
    link?: string;
    animado?: boolean;
    negrito?: boolean;
    botao?: boolean;
}


const CabecalhoItemMenu: React.FC<ICabecalhoItemMenu> = ({ texto, link = '#', animado = false, negrito = false, botao = false }) => {
    return (
        <li className={ `menu-item ${ animado ? 'menu-item--animado' : '' } ${ negrito ? 'menu-item--negrito' : '' } ${ botao ? 'menu-item--botao' : '' }` }>
            <a href={ link } className='menu-item-link'>
                { texto }
            </a>
        </li>
    );
};


export { CabecalhoItemMenu };
