import React from 'react';
import { Caixa } from '../../components/caixa/Caixa';

const Painel: React.FC = () => {
    return (
        <Caixa.Vertical style={{padding: '50px', justifyContent: 'start', height: 'calc(100vh - 70px)', backgroundColor: '#e3e3e3', }}>
            
                <Caixa.Vertical style={{ height: 'auto' }}>
                   
                    <Caixa.Horizontal>
                        <h2>Painel de Controle</h2>
                    </Caixa.Horizontal>
                    <Caixa.Horizontal>
                        <Caixa.Vertical style={{ backgroundColor: 'white', borderRadius: '10px', padding: '20px' }}>
                            <p>Dashboard</p>
                        </Caixa.Vertical>
                        <Caixa.Vertical style={{ backgroundColor: 'white', borderRadius: '10px', padding: '20px' }}>
                            <p>Dashboard</p>
                        </Caixa.Vertical>
                        <Caixa.Vertical style={{ backgroundColor: 'white', borderRadius: '10px', padding: '20px' }}>
                            <p>Dashboard</p>
                        </Caixa.Vertical>
                        <Caixa.Vertical style={{ backgroundColor: 'white', borderRadius: '10px', padding: '20px' }}>
                            <p>Dashboard</p>
                        </Caixa.Vertical>
                    </Caixa.Horizontal>
                </Caixa.Vertical >
                <Caixa.Vertical style={{ backgroundColor: 'white', borderRadius: '10px', padding: '20px' }}>
                            <p>Dashboard</p>
                    </Caixa.Vertical>
                
                <Caixa.Horizontal style={{ height: 'auto' }}>
                    
                </Caixa.Horizontal>
        
        </Caixa.Vertical>
    );
}


export { Painel };
