import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { AutenticacaoAdministradorContext } from '../contexts/AutenticacaoAdministrador';
import { Entrar } from '../pages/administrador/Entrar';
import { Usuarios } from '../pages/administrador/Usuarios';
import { Painel } from '../pages/administrador/Painel';
import { BaseAdministrador } from '../pages/administrador/BaseAdministrador';

interface IRotaProtegidaProps {
    children: JSX.Element;
}

const RotaProtegida = ({ children }: IRotaProtegidaProps) => {
    const { estaAutenticado } = useContext(AutenticacaoAdministradorContext);
    const location = useLocation();

    if (!estaAutenticado) {
        return <Navigate to="/admin/entrar" state={{ from: location }} replace />;
    }

    return children;
};

export const RotasAdministrador = () => {
    return (
        <Routes>
            <Route path="/" element={
                <RotaProtegida>
                    <Navigate to="/admin/painel" replace />
                </RotaProtegida>
            } />
            
            <Route path="/entrar" element={
                <Entrar />
            } />
            
            <Route element={
                <RotaProtegida>
                    <BaseAdministrador />
                </RotaProtegida>
            }>
                <Route path="/painel" element={<Painel />} />
                <Route path="/usuarios" element={<Usuarios />} />
            </Route>
            
            <Route path="*" element={<Navigate to="/admin/entrar" replace />} />
        </Routes>
    );
};