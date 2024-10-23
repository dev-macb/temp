import * as criar from './CriarAdministrador';
import * as contar from './ContarAdministrador';
import * as deletar from './DeletarAdministrador';
import * as atualizar from './AtualizarAdministrador';
import * as autenticar from './AutenticarAdministrador';
import * as buscarTodos from './BuscarTodosAdministrador';
import * as buscarPorId from './BuscarPorIdAdministrador';
import * as buscarPorEmail from './BuscarPorEmailAdministrador';
import * as buscarPorApelido from './BuscarPorApelidoAdministrador';


const AdministradorProvider = {
    ...criar,
    ...contar,
    ...deletar,
    ...atualizar,
    ...autenticar,
    ...buscarTodos,
    ...buscarPorId,
    ...buscarPorEmail,
    ...buscarPorApelido
};


export { AdministradorProvider };
