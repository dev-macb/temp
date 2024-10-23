import * as yup from 'yup';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { IAdministrador } from '../../models/Administrador';
import { ValidarConsulta } from '../../middlewares/ValidarConsulta';
import { ETiposAdministrador } from '../../enums/TiposAdministradores';
import { AdministradorProvider } from '../../providers/administrador';


interface IParametro { id?: string; }
interface ICorpo extends Omit<IAdministrador, 'id' | 'criado_em' | 'atualizado_em'> { }


const validarAtualizar = ValidarConsulta((obterEsquema) => ({
    params: obterEsquema<IParametro>(yup.object().shape({
        id: yup.string().uuid().required(),
    })),
    body: obterEsquema<ICorpo>(yup.object().shape({
        tipo: yup.number().required().oneOf(Object.values(ETiposAdministrador) as number[]),
        apelido: yup.string().required().min(4).max(20),
        email: yup.string().email().required().min(8).max(256),
        senha: yup.string().required().min(8).max(200)
    }))
}));


const atualizar = async (request: Request<IParametro, {}, ICorpo>, response: Response) => {
    const id = request.params.id;
    const dados: ICorpo = request.body;

    if (!id) return response.status(StatusCodes.BAD_REQUEST).json({ erro: 'Parâmetro id não informado' });

    const administradorExistente = await AdministradorProvider.contar('id', id);
    if (!administradorExistente) return response.status(StatusCodes.BAD_REQUEST).json({ erro: 'Administrador não existe' });

    const apelidoExistente = await AdministradorProvider.buscarPorApelido(dados.apelido);
    if (apelidoExistente) { return response.status(StatusCodes.BAD_REQUEST).json({ erro: 'Apelido já registrado' }); }

    const emailExistente = await AdministradorProvider.buscarPorEmail(dados.email); 
    if (emailExistente) { return response.status(StatusCodes.BAD_REQUEST).json({ erro: 'E-mail já registrado' }); }

    const resultado = await AdministradorProvider.atualizar(id, dados);

    if (resultado instanceof Error) return response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ erro: resultado.message });
    else return response.status(StatusCodes.NO_CONTENT).json(resultado);
};


export { validarAtualizar, atualizar };
