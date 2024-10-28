import * as yup from 'yup';
import { IUsuario } from '../../models/Usuario';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ValidarConsulta } from '../../middlewares';
import { JWTService, HashService } from '../../services';
import { UsuarioProvider } from '../../providers/usuario';


interface ICorpo extends Omit<IUsuario, 'id' | 'tipo' | 'cpf' | 'apelido' | 'nome' | 'nascimento' | 
    'sexo' | 'equipe' | 'pcd' | 'telefone' | 'ativo' | 'criado_em' | 'atualizado_em'> { }


const validarAutenticar = ValidarConsulta((obterEsquema) => ({
    body: obterEsquema<ICorpo>(yup.object().shape({
        email: yup.string().required().min(4).max(200),
        senha: yup.string().required().min(8).max(200)
    })),
}));


const autenticar = async (request: Request<{}, {}, ICorpo>, response: Response) => {
    const dados: ICorpo = request.body;

    const usuario = await UsuarioProvider.autenticar(dados.email);
    if (usuario instanceof Error) return response.status(StatusCodes.UNAUTHORIZED).json({ erro: 'E-mail ou senha inválidos' });

    const senhaCorreta = await HashService.comparar(dados.senha, usuario.senha);
    if (senhaCorreta) {
        const tokenAcesso = JWTService.gerarUsuario({ id_usuario: usuario.id, tipo_usuario: usuario.tipo });
        
        if (tokenAcesso === 'JWT_SECRET_NOT_FOUND') return response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ erro: 'Erro ao gerar o token de acesso' });
        else return response.status(StatusCodes.OK).json({ tokenAcesso });
    }
    return response.status(StatusCodes.UNAUTHORIZED).json({ erro: 'E-mail ou senha inválidos' });
};


export { validarAutenticar, autenticar };
