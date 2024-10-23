import { Router } from 'express';
import { autorizacaoAdministrador } from '../middlewares';
import { AdministradorController } from '../controllers/administrador';


const rotiadorPrivado = Router();


rotiadorPrivado.post('/administrador', autorizacaoAdministrador, AdministradorController.validarCriar, AdministradorController.criar);
rotiadorPrivado.delete('/administrador/:id', autorizacaoAdministrador, AdministradorController.validarDeletar, AdministradorController.deletar);
rotiadorPrivado.put('/administrador/:id', autorizacaoAdministrador, AdministradorController.validarAtualizar, AdministradorController.atualizar);
rotiadorPrivado.get('/administrador', autorizacaoAdministrador, AdministradorController.validarBuscarTodos, AdministradorController.buscarTodos);
rotiadorPrivado.get('/administrador/:id', autorizacaoAdministrador, AdministradorController.validarBuscarPorId, AdministradorController.buscarPorId);
rotiadorPrivado.post('/entrar', AdministradorController.validarAutenticar,  AdministradorController.autenticar);


export { rotiadorPrivado };