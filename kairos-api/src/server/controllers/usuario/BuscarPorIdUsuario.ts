import * as yup from 'yup';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ValidarConsulta } from '../../middlewares';
import { UsuarioProvider } from '../../providers/usuario';


interface IParametro { id?: string; }


const validarBuscarPorId = ValidarConsulta(obterEsquema => ({
    params: obterEsquema<IParametro>(yup.object().shape({
        id: yup.string().uuid().required()
    })),
}));


const buscarPorId = async (request: Request, response: Response) => {
    const id = request.params.id;
    if (!id) return response.status(StatusCodes.BAD_REQUEST).json({ erro: 'O parâmetro "id" precisa ser informado.' });

    const resultado = await UsuarioProvider.buscarPorId(id);

    if (resultado instanceof Error) return response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ erro: resultado.message });
    else return response.status(StatusCodes.OK).json(resultado);
};


export { validarBuscarPorId, buscarPorId };
