import { Route, Routes, Navigate, BrowserRouter } from 'react-router-dom';

import { PrivadoRouter } from './Privado';
import { Inicio } from '../pages/publico/Inicio';
import { Entrar } from '../pages/privado/Entrar';
import { Painel } from '../pages/privado/Painel';
import { Usuarios } from '../pages/privado/Usuarios';

const Rotiador = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/'             element={ <Inicio /> }/>
                
                <Route path='/admin/entrar' element={ <Entrar /> }/>
                
                {/* Rotas Privadas: Verifica apenas se o usuário está autenticado */}
                <Route path='/admin' element={ <PrivadoRouter /> }>
                    <Route path='/admin/painel' element={ <Painel /> } />
                </Route>

                {/* Rotas protegidas por Admin: Verifica se o usuário é admin */}
                <Route path='/admin' element={ <PrivadoRouter /> }>
                    <Route path='/admin/usuarios' element={ <Usuarios /> } />
                </Route>
                
                <Route path='*' element={ <Navigate to='/' /> }/>
            </Routes>
        </BrowserRouter>
    );
}


export { Rotiador };
