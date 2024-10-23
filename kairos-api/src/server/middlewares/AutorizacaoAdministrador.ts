import { JWTService } from '../services';
import { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';


const autorizacaoAdministrador: RequestHandler = async (request, response, next) => {
    const { authorization } = request.headers;
    if (!authorization) {
        return response.status(StatusCodes.UNAUTHORIZED).json({ erro: 'Não autenticado' });
    }

    const [tipo, token] = authorization.split(' ');
    if (tipo !== 'Bearer') {
        return response.status(StatusCodes.UNAUTHORIZED).json({ erro: 'Não autenticado' });
    }

    const dadoJWT = JWTService.autenticarAdministrador(token);
    if (dadoJWT === 'APP_SEGREDO_JWT_NAO_ENCONTRADO') return response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ erro: 'Erro ao verificar o token de acesso' });
    else if (dadoJWT === 'TOKEN_INVALIDO') return response.status(StatusCodes.UNAUTHORIZED).json({ erro: 'Não autorizado' });

    request.headers.id_usuario = dadoJWT.id_usuario.toString();

    return next();
};


export { autorizacaoAdministrador };