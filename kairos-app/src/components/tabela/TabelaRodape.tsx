import React from 'react';


interface IDados {
    [key: string]: any;
}

interface ITabelaConteiner {
    dados: IDados[];
}


const TabelaRodape: React.FC<ITabelaConteiner> = ({ dados }) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                <span>1 - {dados.length} de {dados.length}</span>
                <div>
                    <button>Anterior</button>
                    <button>Próximo</button>
                </div>
            </div>
    );
};

export { TabelaRodape };