import { Route, Routes, Navigate, BrowserRouter } from 'react-router-dom';
import { useContext } from 'react';

import { PrivadoRouter } from './Privado';
import { Inicio } from '../pages/usuario/Inicio';
import { Entrar } from '../pages/administrador/Entrar';
import { Painel } from '../pages/administrador/BaseAdministrador';
import { Usuarios } from '../pages/administrador/Usuarios';
import { AutenticacaoAdministradorContext } from '../contexts/AutenticacaoAdministrador';
import RotaPrivada from './RotasAdministrador';
import { Eventos } from '../pages/usuario/Eventos';
import { Dashboard } from '../pages/administrador/Painel';

const Rotiador = () => {
    const { estaAutenticado } = useContext(AutenticacaoAdministradorContext);

    return (
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/eventos" element={<Eventos />} />
                    <Route path="/admin/entrar" element={<Entrar />} />

                    <Route path="/admin" element={<RotaPrivada />}>
                        <Route index element={<Dashboard />} />
                        <Route path="painel" element={<Painel />} /> {/* /admin/painel */}
                        <Route path="usuarios" element={<Usuarios />} /> {/* /admin/usuarios */}
                    </Route>

                    {/* Página de erro 404 */}
                    <Route path="*" element={<Inicio />} />
                </Routes>
            </BrowserRouter>
    );
};

export { Rotiador };
