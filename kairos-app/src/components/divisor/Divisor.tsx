import './Divisor.css';
import React from 'react';


interface IPropriedadesDivisor {
    cor?: string;
    texto?: string;
}


const Divisor: React.FC<IPropriedadesDivisor> = ({ cor = '#303030', texto }) => {
    return (
        <div className="divisor-conteiner">
            { texto && <div style={{ backgroundColor: cor }} className="divisor" /> }
            { texto && <span style={{ color: cor }}>{ texto }</span> }
            <div style={{ backgroundColor: cor } } className="divisor" />
        </div>
    );
}


export { Divisor };