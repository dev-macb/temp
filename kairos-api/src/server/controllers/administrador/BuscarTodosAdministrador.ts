import * as yup from 'yup';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ValidarConsulta } from '../../middlewares/ValidarConsulta';
import { AdministradorProvider } from '../../providers/administrador';


interface IConsulta {
    pagina?: number;
    limite?: number;
    filtro?: string;
}


const validarBuscarTodos = ValidarConsulta(obterEsquema => ({
    query: obterEsquema<IConsulta>(yup.object().shape({
        pagina: yup.number().integer().optional().moreThan(0).default(1),
        limite: yup.number().integer().optional().moreThan(0).default(7),
        filtro: yup.string().optional().default('')
    }))
}));


const buscarTodos = async (request: Request<{}, {}, {}, IConsulta>, response: Response) => {
    const contagem = await AdministradorProvider.contar('apelido', request.query.filtro);
    const resultado = await AdministradorProvider.buscarTodos(request.query.pagina || 1, request.query.limite || 7, request.query.filtro || '');
    
    if (resultado instanceof Error) return response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ errors: resultado.message }); 
    else if (contagem instanceof Error) return response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ errors: contagem.message });

    response.setHeader('access-control-expose-headers', 'x-total-count');
    response.setHeader('x-total-count', contagem);

    return response.status(StatusCodes.OK).json(resultado);
};


export { validarBuscarTodos, buscarTodos };
