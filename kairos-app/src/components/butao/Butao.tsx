import './Butao.css';
import { Link } from 'react-router-dom';
import React, { ButtonHTMLAttributes } from 'react';

interface IButao extends ButtonHTMLAttributes<HTMLButtonElement> {
    tipo?: 'primario' | 'secundario' | 'sucesso' | 'aviso' | 'risco' | 'info' | 'desabilitado';
    link?: string;
    animado?: boolean;
    contorno?: boolean;
    arredondado?: boolean;
    icone?: React.ReactNode;
}

const Butao: React.FC<IButao> = ({ tipo = 'primario', link, animado, contorno, arredondado, icone, children, ...rest }) => {
    const classeButao = `butao-${tipo}${contorno ? '-contorno' : ''}${arredondado ? ' arredondado' : ''}${animado ? ' animado' : ''}`;

    const Botao = (
        <button className={classeButao} {...rest}>
            {icone} {children}
        </button>
    );

    return (
        <div className='butao-conteiner'>
            <div className='butao-conteudo'>
                {link ? <Link to={link}>{Botao}</Link> : Botao}
            </div>
        </div>
    );
}

export { Butao };
