import { Route, Routes, Navigate, BrowserRouter } from 'react-router-dom';
import { useContext } from 'react';

import { PrivadoRouter } from './Privado';
import { Inicio } from '../pages/usuario/Inicio';
import { Entrar } from '../pages/administrador/Entrar';
import { Painel } from '../pages/administrador/Painel';
import { Usuarios } from '../pages/administrador/Usuarios';
import { AutenticacaoAdministradorContext } from '../contexts/AutenticacaoAdministrador';

const Rotiador = () => {
    const { estaAutenticado } = useContext(AutenticacaoAdministradorContext);

    return (
        <BrowserRouter>
            <Routes>
                {/* Rota pública */}
                <Route path='/' element={<Inicio />} />

                {/* Página de login do admin */}
                <Route path='/admin/entrar' element={<Entrar />} />

                {/* Redireciona para painel se o admin estiver logado, ou para login se não estiver */}
                <Route path='/admin' element={estaAutenticado ? <Navigate to='/admin/painel' /> : <Navigate to='/admin/entrar' />} />

                {/* Rotas privadas administrativas */}
                <Route element={<PrivadoRouter />}>
                    <Route path='/admin/painel' element={<Painel />} />
                    <Route path='/admin/usuarios' element={<Usuarios />} />
                </Route>

                {/* Redirecionamento para rotas inexistentes */}
                <Route path='*' element={<Navigate to='/' />} />
            </Routes>
        </BrowserRouter>
    );
};

export { Rotiador };
