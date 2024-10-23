import './styles/Global.css';

import { Rotiador } from './routes/Rotiador';
import { TemaProvider } from './contexts/TemaContext';
import { AutenticacaoAdministradorProvider } from './contexts/AutenticacaoAdministrador';

const App = () => {
    return (
        <AutenticacaoAdministradorProvider>
            <TemaProvider>
                <Rotiador />
            </TemaProvider>
        </AutenticacaoAdministradorProvider>
    );
}


export { App };
