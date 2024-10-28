import { Router } from 'express';
import { autorizacaoAdministrador } from '../middlewares';
import { AdministradorController } from '../controllers/administrador';
import { UsuarioController } from '../controllers/usuario';


const rotiadorPrivado = Router();


rotiadorPrivado.post('/administradores', autorizacaoAdministrador, AdministradorController.validarCriar, AdministradorController.criar);
rotiadorPrivado.delete('/administradores/:id', autorizacaoAdministrador, AdministradorController.validarDeletar, AdministradorController.deletar);
rotiadorPrivado.put('/administradores/:id', autorizacaoAdministrador, AdministradorController.validarAtualizar, AdministradorController.atualizar);
rotiadorPrivado.get('/administradores', autorizacaoAdministrador, AdministradorController.validarBuscarTodos, AdministradorController.buscarTodos);
rotiadorPrivado.get('/administradores/:id', autorizacaoAdministrador, AdministradorController.validarBuscarPorId, AdministradorController.buscarPorId);
rotiadorPrivado.post('/administradores/entrar', AdministradorController.validarAutenticar,  AdministradorController.autenticar);

rotiadorPrivado.post('/usuarios', autorizacaoAdministrador, UsuarioController.validarCriar, UsuarioController.criar);
rotiadorPrivado.delete('/usuarios/:id', autorizacaoAdministrador, UsuarioController.validarDeletar, UsuarioController.deletar);
rotiadorPrivado.put('/usuarios/:id', autorizacaoAdministrador, UsuarioController.validarAtualizar, UsuarioController.atualizar);
rotiadorPrivado.get('/usuarios', autorizacaoAdministrador, UsuarioController.validarBuscarTodos, UsuarioController.buscarTodos);
rotiadorPrivado.get('/usuarios/:id', autorizacaoAdministrador, UsuarioController.validarBuscarPorId, UsuarioController.buscarPorId);

export { rotiadorPrivado };