import * as yup from 'yup';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ValidarConsulta } from '../../middlewares/ValidarConsulta';
import { AdministradorProvider } from '../../providers/administrador';


interface IParametro { id?: string; }


const validarDeletar = ValidarConsulta(obterEsquema => ({
    params: obterEsquema<IParametro>(yup.object().shape({
        id: yup.string().uuid().required(),
    }))
}));


const deletar = async (request: Request, response: Response) => {
    const id = request.params.id;
    if (!id) return response.status(StatusCodes.BAD_REQUEST).json({ erro: 'O parâmetro id precisa ser informado' });

    const administradorExistente = await AdministradorProvider.contar('id', id);
    if (!administradorExistente) return response.status(StatusCodes.BAD_REQUEST).json({ erro: 'Administrador não existe' });

    const resultado = await AdministradorProvider.deletar(id);

    if (resultado instanceof Error) return response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ erro: resultado.message });
    else return response.status(StatusCodes.NO_CONTENT).send();
};


export { validarDeletar, deletar };
