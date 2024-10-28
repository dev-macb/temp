import * as yup from 'yup';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ValidarConsulta } from '../../middlewares';
import { UsuarioProvider } from '../../providers/usuario';


interface ICabecalho { id: string; }


const validarBuscarMeuPerfil = ValidarConsulta(obterEsquema => ({
    header: obterEsquema<ICabecalho>(yup.object().shape({
        id: yup.string().uuid().required(),
    })),
}));


const buscarMeuPerfil = async (request: Request, response: Response) => {
    const id = request.headers.id_usuario?.toString();
    if (!id) return response.status(StatusCodes.BAD_REQUEST).json({ erro: 'Usuário não identificado' });

    const resultado = await UsuarioProvider.buscarPorId(id);
    if (resultado instanceof Error) return response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ erro: resultado.message });
    else return response.status(StatusCodes.OK).json(resultado);
};


export { validarBuscarMeuPerfil, buscarMeuPerfil };
