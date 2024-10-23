import { Route, Routes, Navigate, BrowserRouter } from 'react-router-dom';

import { PrivadoRouter } from './Privado';
import { Inicio } from '../pages/publico/Inicio';
import { Entrar } from '../pages/privado/Entrar';
import { Painel } from '../pages/privado/Painel';

const Rotiador = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/'             element={ <Inicio /> }/>
                
                <Route path='/admin/entrar' element={ <Entrar /> }/>
                
                <Route path='/admin/painel' element={ <PrivadoRouter /> }>
                    <Route path='/admin/painel' element={ <Painel /> } />
                </Route>
                
                <Route path='*' element={ <Navigate to='/' /> }/>
            </Routes>
        </BrowserRouter>
    );
}


export { Rotiador };
