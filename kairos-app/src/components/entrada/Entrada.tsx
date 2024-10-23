import './Entrada.css';
import React, { useState } from 'react';


interface IEntrada extends React.InputHTMLAttributes<HTMLInputElement> {
    titulo?: string;
    tamanho?: string;
    dinamico?: boolean;
    erro?: boolean;
}


const Entrada: React.FC<IEntrada> = ({ titulo, tamanho, dinamico, erro, ...resto }) => {
    const [focado, definirFocado] = useState(false); 
    const estiloTitulo = (erro && !focado) ? { color: '#FF0000' } : {};
    const estiloBorda = (erro && !focado) ? { border: '1px solid #FF0000' } : {};

    return (
        <div className='entrada-conteiner' style={ dinamico ? { width: '100%' } : { width: tamanho } }>
            <div className='entrada-conteudo'>
                <input 
                    type='text' 
                    style={estiloBorda} 
                    onFocus={() => definirFocado(true)} 
                    onBlur={() => {definirFocado(false)}}
                    { ...resto } 
                />
                { titulo && <span style={estiloTitulo}>{ titulo }</span> }
            </div>
        </div>
    );
}


export { Entrada }; 
