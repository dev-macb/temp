import React, { ButtonHTMLAttributes } from 'react';


interface IMenuButaoItem extends ButtonHTMLAttributes<HTMLButtonElement> {
    icone?: string;
    texto: string;
    link?: string;
    animado?: boolean;
    negrito?: boolean;
    butao?: boolean;
}


const MenuButaoItem: React.FC<IMenuButaoItem> = ({ icone, texto, link, animado = false, negrito = false, butao = false }) => {
    return (
        <a href={ link } className={ `item-menu-hamburger-link ${ animado ? 'item-menu-hamburger-link--animado' : '' }` }>
            <li className={ `item-menu-hamburger ${ butao ? 'item-menu-hamburger--botao' : '' }` }>
                { icone && <img src={ icone } alt='Ícone do item' /> }
                <span style={{ fontWeight: negrito ? 'bold' : 'normal' }}>{ texto }</span>
            </li>
        </a>
    );
};


export { MenuButaoItem };
