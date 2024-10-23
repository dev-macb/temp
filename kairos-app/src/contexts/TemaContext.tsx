import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';


interface ITemaContext {
    tema: string;
    alterarTema: () => void;
}

interface ITemaProvider {
    children: ReactNode;
}


const TemaContext = createContext<ITemaContext | undefined>(undefined);


const TemaProvider: React.FC<ITemaProvider> = ({ children }) => {
    const [tema, definirTema] = useState<string>(() => {
        return localStorage.getItem('tema') || 'claro';
    });

    const alterarTema = () => {
        const novoTema = tema === 'claro' ? 'escuro' : 'claro';
        definirTema(novoTema);
    };

    useEffect(() => {
        document.body.className = (tema === 'escuro') ? 'tema-escuro' : '';
        localStorage.setItem('tema', tema);
    }, [tema]);

    return (
        <TemaContext.Provider value={{ tema, alterarTema }}>
            { children }
        </TemaContext.Provider>
    );
};


const usarTema = () => {
    const contexto = useContext(TemaContext);

    if (!contexto) {
        throw new Error('O método usarTema deve ser usado dentro de um TemaProvider.');
    }

    return contexto;
}


export { TemaProvider, usarTema };