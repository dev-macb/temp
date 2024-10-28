import * as yup from 'yup';
import { IUsuario } from '../../models/Usuario';
import { CPFService } from '../../services/CPFService';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { UsuarioProvider } from '../../providers/usuario';
import { ValidarConsulta } from '../../middlewares/ValidarConsulta';
import { ETiposUsuario } from '../../enums/TiposUsuarios';
import { ETiposSexo } from '../../enums/TiposSexos';

interface ICorpo extends Omit<IUsuario, 'id' | 'criado_em' | 'atualizado_em'> { }


const validarCriar = ValidarConsulta((obterEsquema) => ({
    body: obterEsquema<ICorpo>(yup.object({
        tipo: yup.mixed<ETiposUsuario>()
            .oneOf(Object.values(ETiposUsuario) as readonly ETiposUsuario[])
            .required(),
        cpf: yup.string().required().min(11).max(14),
        apelido: yup.string().required().min(4).max(100),
        nome: yup.string().required().min(4).max(100),
        nascimento: yup.date().required(),
        sexo: yup.mixed<ETiposSexo>()
            .oneOf(Object.values(ETiposSexo) as readonly ETiposSexo[])
            .required(),
        pcd: yup.boolean().required(),
        equipe: yup.string().optional().max(50),
        telefone: yup.string().optional().min(8).max(14),
        email: yup.string().email().required().min(5).max(200),
        senha: yup.string().required().min(8).max(200),
        ativo: yup.boolean().required().default(true),
    }) as yup.ObjectSchema<ICorpo>) 
}));


const criar = async (request: Request<{}, {}, ICorpo>, response: Response) => {
    const dados: ICorpo = request.body;

    const cpfValido = CPFService.validar(dados.cpf);
    if (!cpfValido) return response.status(StatusCodes.BAD_REQUEST).json({ erro: { body: { cpf: 'CPF inválido'}} });

    const usuarioExistente = await UsuarioProvider.buscarPorCPF(dados.cpf);
    if (usuarioExistente) return response.status(StatusCodes.BAD_REQUEST).json({ erro: { body: { cpf: 'CPF já registrado'}} });

    const emailExistente = await UsuarioProvider.buscarPorEmail(dados.email); 
    if (emailExistente) return response.status(StatusCodes.BAD_REQUEST).json({ erro: 'E-mail já registrado' });

    const resultado = await UsuarioProvider.criar(dados);
    if (resultado instanceof Error) return response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ erro: resultado.message });
    else return response.status(StatusCodes.CREATED).json({ id: resultado });
};


export { validarCriar, criar };
