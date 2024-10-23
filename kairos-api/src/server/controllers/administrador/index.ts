import * as criar from './CriarAdministrador';
import * as deletar from './DeletarAdministrador';
import * as atualizar from './AtualizarAdministrador';
import * as autenticar from './AutenticarAdministrador';
import * as buscarPorId from './BuscarPorIdAdministrador';
import * as buscarTodos from './BuscarTodosAdministrador';


const AdministradorController = {
    ...criar,
    ...deletar,
    ...atualizar,
    ...autenticar,
    ...buscarPorId,
    ...buscarTodos
};


export { AdministradorController };
