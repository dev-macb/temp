import * as yup from 'yup';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { IAdministrador } from '../../models';
import { ValidarConsulta } from '../../middlewares/ValidarConsulta';
import { AdministradorProvider } from '../../providers/administrador';
import { ETiposAdministrador } from '../../enums/TiposAdministradores';


interface ICorpo extends Omit<IAdministrador, 'id' | 'criado_em' | 'atualizado_em'> { }


const validarCriar = ValidarConsulta((obterEsquema) => ({
    body: obterEsquema<ICorpo>(yup.object().shape({
        tipo: yup.number().required().oneOf(Object.values(ETiposAdministrador) as number[]),
        apelido: yup.string().required().min(4).max(20),
        email: yup.string().email().required().min(8).max(256),
        senha: yup.string().required().min(8).max(200)
    })),
}));


const criar = async (request: Request<{}, {}, ICorpo>, response: Response) => {
    const dados: ICorpo = request.body;

    const apelidoExistente = await AdministradorProvider.buscarPorApelido(dados.apelido);
    if (apelidoExistente) { return response.status(StatusCodes.BAD_REQUEST).json({ erro: 'Apelido já registrado' }); }

    const emailExistente = await AdministradorProvider.buscarPorEmail(dados.email); 
    if (emailExistente) { return response.status(StatusCodes.BAD_REQUEST).json({ erro: 'E-mail já registrado' }); }

    const resultado = await AdministradorProvider.criar(dados);
    
    if (resultado instanceof Error) return response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ erro: resultado.message });
    else return response.status(StatusCodes.CREATED).json({ id: resultado });
};


export { validarCriar, criar };
