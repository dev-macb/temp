import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AutenticacaoAdministradorContext } from '../contexts/AutenticacaoAdministrador';


const PrivadoRouter = () => {
    const { estaAutenticado } = useContext(AutenticacaoAdministradorContext);

    return estaAutenticado ? <Outlet /> : <Navigate to='/admin/entrar' />;
};


export { PrivadoRouter };
