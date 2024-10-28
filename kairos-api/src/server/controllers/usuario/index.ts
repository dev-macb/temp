import * as criar from './CriarUsuario';
import * as deletar from './DeletarUsuario';
import * as atualizar from './AtualizarUsuario';
import * as autenticar from './AutenticarUsuario';
import * as registrarSe from './RegistrarSeUsuario';
import * as buscarPorId from './BuscarPorIdUsuario';
import * as buscarTodos from './BuscarTodosUsuarios';
import * as buscarMeuPerfil from './BuscarMeuPerfil';

const UsuarioController = {
    ...criar,
    ...deletar,
    ...atualizar,
    ...autenticar,
    ...registrarSe,
    ...buscarPorId,
    ...buscarTodos,
    ...buscarMeuPerfil
};


export { UsuarioController };
