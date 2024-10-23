import './Imagem.css';
import React from 'react';


interface IImagem {
    caminhoImagem?: string;
    link?: string;
    textoAlternativo?: string;
}


const Imagem: React.FC<IImagem> = ({ caminhoImagem, link = '#', textoAlternativo }) => {
    return (
        <a href={ link }>
            <img src={ caminhoImagem } alt={ textoAlternativo } className='imagem' />
        </a>
    );
};


export { Imagem };
