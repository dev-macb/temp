import React from 'react';
import './Distintivo.css';


interface IDistintivo {
    tipo?: 'normal' | 'info' | 'sucesso' | 'aviso' | 'erro';
    tamanho?: 'pequeno' | 'normal' | 'grande';
    arredondado?: boolean;
    children: React.ReactNode;
}


const Distintivo: React.FC<IDistintivo> = ({ tipo = 'normal', tamanho = 'normal', arredondado = 'true', children}) => {
    const definirNomeClasse = () => {
        let nomeClasse = 'distintivo';

        if (tipo) nomeClasse += ` ${ tipo }`;
        if (tamanho) nomeClasse += ` ${ tamanho }`;
        if (arredondado) nomeClasse += ' arredondado';

        return nomeClasse;
    };

    return (
        <span className={ definirNomeClasse() }>
            { children }
        </span>
    );
};


export { Distintivo };