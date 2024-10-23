import React from 'react';

import { usarTema } from '../../contexts/TemaContext';
import { Pagina } from '../../components/pagina/Pagina';
import { Cabecalho } from '../../components/cabecalho/Cabecalho';
import { Menu } from '../../components/menu/Menu';
import { Imagem } from '../../components/imagem/Imagem';
import { Link } from 'react-router-dom';
import { Secao } from '../../components/secao/SecaoConteiner';

import iconeMouse from '../../assets/icons/Mouse.svg';
import imagemBanner from '../../assets/images/Banner.svg';
import iconeMenuHamburger from '../../assets/icons/MenuHamburger.svg'

import { Caixa } from '../../components/caixa/Caixa';
import { Butao } from '../../components/butao/Butao';

const Inicio: React.FC = () => {
    const { tema, alterarTema } = usarTema();

    return (
        <Pagina>
            <Cabecalho divisor>
                <Link to='/' className='cabecalho-logo'>
                    <svg width="160" height="40" viewBox="0 0 160 36" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.4 35H15.85V28.25C15.85 20.9833 13.3666 17.0833 8.39996 16.55V35H0.499962V0.499997H8.39996V14.45C10.0333 14.0833 11.5 13.1833 12.8 11.75C14.1333 10.3167 14.8 8.65 14.8 6.75V0.499997H22.75V3.1C22.75 5.53333 22 7.86667 20.5 10.1C19.0333 12.3 17.1166 13.9167 14.75 14.95C20.2833 16.35 23.1666 20.4833 23.4 27.35C23.4 27.8833 23.4 28.5833 23.4 29.45V35ZM47.7062 23.65V11.6C47.7062 9.1 47.0395 6.83333 45.7062 4.8C44.4062 2.76667 42.6895 1.75 40.5562 1.75C39.5895 1.75 38.7729 2.06667 38.1062 2.7C37.4729 3.33333 37.0229 4.16667 36.7562 5.2C36.2895 6.8 36.0562 8.45 36.0562 10.15V25.15C36.0562 28.0833 36.4895 30.25 37.3562 31.65C38.2562 33.05 39.4229 33.75 40.8562 33.75C42.9562 33.75 44.6229 32.75 45.8562 30.75C47.0895 28.75 47.7062 26.3833 47.7062 23.65ZM55.7062 35H47.7562V29.5C46.9895 31.5 45.8895 33 44.4562 34C43.0229 35 41.5229 35.5 39.9562 35.5C36.3562 35.5 33.4895 34.3833 31.3562 32.15C29.2229 29.8833 28.1562 26.7167 28.1562 22.65V12.7C28.1562 8.6 29.3395 5.46667 31.7062 3.3C34.0729 1.1 36.8562 -2.38419e-06 40.0562 -2.38419e-06C41.9229 -2.38419e-06 43.5395 0.616664 44.9062 1.85C46.2729 3.05 47.2229 4.51666 47.7562 6.25V0.499997H55.7062V35ZM69.8894 0.499997V35H61.9394V0.499997H69.8894ZM91.1808 9.7C91.1808 6.9 90.6142 4.95 89.4808 3.85C88.3808 2.71667 86.6475 2.15 84.2808 2.15H81.5308V35H73.6308V0.499997H85.8808C94.5142 0.499997 98.8308 3.46666 98.8308 9.4C98.8308 13.3667 95.8142 16.25 89.7808 18.05C96.1808 19.3167 99.3808 22.7167 99.3808 28.25V35H91.4808V26.55C91.4808 24.0167 90.9642 22.0833 89.9308 20.75C88.8975 19.4167 87.4475 18.75 85.5808 18.75C85.0475 18.75 84.3308 18.7833 83.4308 18.85V17.55C85.2308 17.4833 86.8975 16.9 88.4308 15.8C90.2642 14.5333 91.1808 12.5 91.1808 9.7ZM130.062 22C130.062 26.1 128.862 29.3833 126.462 31.85C124.062 34.2833 120.695 35.5 116.362 35.5C112.062 35.5 108.712 34.2833 106.312 31.85C103.945 29.3833 102.762 26.1 102.762 22V13.55C102.762 9.45 103.945 6.16666 106.312 3.7C108.712 1.23333 112.062 -2.38419e-06 116.362 -2.38419e-06C120.695 -2.38419e-06 124.062 1.23333 126.462 3.7C128.862 6.16666 130.062 9.45 130.062 13.55V22ZM122.062 25.9V9.6C122.062 7.26667 121.578 5.38333 120.612 3.95C119.645 2.48333 118.228 1.75 116.362 1.75C114.528 1.75 113.128 2.48333 112.162 3.95C111.195 5.38333 110.712 7.26667 110.712 9.6V25.9C110.712 28.2667 111.195 30.1667 112.162 31.6C113.128 33.0333 114.528 33.75 116.362 33.75C118.228 33.75 119.645 33.0333 120.612 31.6C121.578 30.1333 122.062 28.2333 122.062 25.9ZM155.762 18.75C158.329 20.3833 159.612 22.55 159.612 25.25C159.612 27.9167 158.212 30.3 155.412 32.4C152.646 34.4667 149.546 35.5 146.112 35.5C142.679 35.5 139.729 34.6333 137.262 32.9C134.796 31.1333 133.562 28.6167 133.562 25.35V24.8H139.912V25.9C139.912 28.1333 140.529 30 141.762 31.5C143.029 32.9667 144.562 33.7 146.362 33.7C148.196 33.7 149.662 33.1333 150.762 32C151.896 30.8333 152.462 29.2333 152.462 27.2C152.462 25.6667 151.296 24.1833 148.962 22.75L138.962 16.65C136.196 14.9833 134.812 12.65 134.812 9.65C134.812 7.21666 135.946 5 138.212 3C140.479 0.999998 143.279 -2.38419e-06 146.612 -2.38419e-06C148.379 -2.38419e-06 149.929 0.266665 151.262 0.799999C152.629 1.33333 153.646 2 154.312 2.8C155.546 4.3 156.162 5.55 156.162 6.55V6.85H154.462C154.462 5.71667 153.829 4.58333 152.562 3.45C151.329 2.31667 149.812 1.75 148.012 1.75C146.246 1.75 144.729 2.3 143.462 3.4C142.196 4.5 141.562 5.91666 141.562 7.65C141.562 8.68333 141.912 9.56667 142.612 10.3C143.346 11.0333 144.329 11.7667 145.562 12.5L155.762 18.75Z" />
                    </svg>
                </Link> 
                <Menu.Butao iconeMenu={ iconeMenuHamburger }>
                    <Menu.ButaoItem texto='Início' onClick={ alterarTema } />
                    <Menu.ButaoItem texto='Eventos' onClick={ alterarTema } />
                    <Menu.ButaoItem texto='Cronometragens' onClick={ alterarTema } />
                </Menu.Butao>
            </Cabecalho>
            <Secao style={{ marginTop: '70px' }}>
                <Caixa.Horizontal>
                    <Caixa.Vertical>
                        <Caixa.Horizontal>
                            <div className='secao-apresentacao--titulo'>
                                <h1 className='titulo-especial'>Uma Tempo Oportuno!</h1>
                                <h2 className='titulo-especial-inverso'>Inscrições e Cronometragem Esportiva</h2>
                            </div>
                        </Caixa.Horizontal>
                        <Caixa.Horizontal>
                            <p>
                                Traga seus eventos para a kairos e qualifique <br />
                                o tempo dos atletas da sua corrida. 
                            </p>
                        </Caixa.Horizontal>
                        <Caixa.Horizontal style={{ gap: '20px', justifyContent: 'start' }}>
                            <Butao animado tipo='secundario'>Torne-se um Organizador</Butao>
                            <Butao animado>Ver Eventos</Butao>
                        </Caixa.Horizontal>
                        <Caixa.Horizontal>
                            <div className='secao-apresentacao--ver-mais'>
                                <img src={ iconeMouse } alt="Ícone de Mouse" />
                                <span>Role para ver mais seções</span>
                            </div>
                        </Caixa.Horizontal>
                    </Caixa.Vertical>
                    <img src={ imagemBanner } alt="Desenvolvedor de Software" style={{ maxHeight: '500px' }}/>
                </Caixa.Horizontal>
            </Secao>
        </Pagina>
    );
}


export { Inicio };
