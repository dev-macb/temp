import * as criar from './CriarUsuario';
import * as contar from './ContarUsuario';
import * as deletar from './DeletarUsuario';
import * as atualizar from './AtualizarUsuario';
import * as autenticar from './AutenticarUsuario';
import * as registrarSe from './RegistrarSeUsuario';
import * as buscarTodos from './BuscarTodosUsuario';
import * as buscarPorId from './BuscarPorIdUsuario';
import * as buscarPorCPF from './BuscarPorCPFUsuario';
import * as buscarPorEmail from './BuscarPorEmailUsuario';


const UsuarioProvider = {
    ...criar,
    ...contar,
    ...deletar,
    ...atualizar,
    ...autenticar,
    ...registrarSe,
    ...buscarTodos,
    ...buscarPorId,
    ...buscarPorCPF,
    ...buscarPorEmail,
};


export { UsuarioProvider };
