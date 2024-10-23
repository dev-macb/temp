import React, { useState } from 'react';


interface IMenuButao {
    textoMenu?: string;
    iconeMenu: string;
    children: React.ReactNode;
}


const MenuButao: React.FC<IMenuButao> = ({ textoMenu, iconeMenu, children }) => {
    const [aberto, setAberto] = useState(false);

    const abrirModal = () => setAberto(true);
    const fecharModal = () => setAberto(false);

    return (
        <div onMouseEnter={ abrirModal } onMouseLeave={ fecharModal } className='menu-hamburger-container'>
            <button onMouseEnter={ abrirModal } onMouseLeave={ fecharModal } className='menu-hamburger-botao' style={{ width: !textoMenu ? '40px' : '' }}>
                { textoMenu && <span className='menu-hamburger-texto'>{ textoMenu }</span> }
                { iconeMenu && <img src={ iconeMenu } alt='Ícone do menu' className='menu-hamburger-icone' /> }
            </button>
            {aberto && (
                <nav onMouseEnter={ abrirModal } onMouseLeave={ fecharModal } className='menu-hamburger-modal'>
                    <ul className='menu-hamburger-lista'>
                        { children }
                    </ul>
                </nav>
            )}
        </div>
    );
};


export { MenuButao };
