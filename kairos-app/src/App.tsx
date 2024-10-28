import './styles/Global.css';

import { TemaProvider } from './contexts/TemaContext';
import { AutenticacaoAdministradorProvider } from './contexts/AutenticacaoAdministrador';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RotasAdministrador } from './routes/RotasAdministrador';
import { RotasUsuario } from './routes/Usuario';

const App = () => {
    return (
        <TemaProvider>
            <BrowserRouter>
                <AutenticacaoAdministradorProvider>
                    <Routes>
                    <Route path="/admin/*" element={<RotasAdministrador />} />
                    <Route path="/*" element={<RotasUsuario />} />
                    </Routes>
                </AutenticacaoAdministradorProvider>
            </BrowserRouter>
        </TemaProvider>
    );
}


export { App };
