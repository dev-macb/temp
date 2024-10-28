import React from 'react';

interface ITabelaColuna {
    campo: string;
    cabecalho: string;
    corpoCelula?: (conteudoColuna: any) => React.ReactNode;
}

const TabelaColuna: React.FC<ITabelaColuna> = ({ campo, cabecalho, corpoCelula }) => {
    console.log(corpoCelula);
    return (
        <th id={campo}>
            {cabecalho}
        </th>
    );
};

export { TabelaColuna };