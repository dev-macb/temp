import { Route, Routes } from 'react-router-dom';

const PaginaPrincipal = () => <h1>Página Principal</h1>;
const Eventos = () => <h1>Eventos</h1>;

export const RotasUsuario = () => {
  return (
    <Routes>
      <Route path="/" element={<PaginaPrincipal />} />
      <Route path="/eventos" element={<Eventos />} />

    </Routes>
  );
};