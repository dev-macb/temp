import * as yup from 'yup';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { JWTService, HashService } from '../../services';
import { IAdministrador } from '../../models/Administrador';
import { ValidarConsulta } from '../../middlewares/ValidarConsulta';
import { AdministradorProvider } from '../../providers/administrador';


interface ICorpo extends Omit<IAdministrador, 'id' | 'tipo' | 'email' | 'criado_em' | 'atualizado_em'> { }


const validarAutenticar = ValidarConsulta((obterEsquema) => ({
    body: obterEsquema<ICorpo>(yup.object().shape({
        apelido: yup.string().required().min(4).max(20),
        senha: yup.string().required().min(8).max(200)
    })),
}));


const autenticar = async (request: Request<{}, {}, ICorpo>, response: Response) => {
    const dados: ICorpo = request.body;

    const administradorExistente = await AdministradorProvider.autenticar(dados.apelido);
    if (administradorExistente instanceof Error) return response.status(StatusCodes.UNAUTHORIZED).json({ erro: 'Apelido ou senha inválidos' });

    const senhaCorreta = await HashService.comparar(dados.senha, administradorExistente.senha);
    if (senhaCorreta) {
        const tokenAcesso = JWTService.gerarAdministrador({ id_usuario: administradorExistente.id });
        
        if (tokenAcesso === 'JWT_SECRET_NOT_FOUND') return response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ erros: 'Erro ao gerar o token de acesso' });
        else return response.status(StatusCodes.OK).json({ tokenAcesso });
    }
    return response.status(StatusCodes.UNAUTHORIZED).json({ erro: 'Apelido ou senha inválidos' });
};


export { validarAutenticar, autenticar };
