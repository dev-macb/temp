import * as yup from 'yup';
import { IUsuario } from '../../models/Usuario';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { UsuarioProvider } from '../../providers/usuario';
import { ValidarConsulta } from '../../middlewares/ValidarConsulta';
import { ETiposSexo } from '../../enums/TiposSexos';
import { ETiposUsuario } from '../../enums/TiposUsuarios';


interface ICorpo extends Omit<IUsuario, 'id' | 'ativo' | 'criado_em' | 'atualizado_em'> { }


const validarRegistrarSe = ValidarConsulta((obterEsquema) => ({
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
        senha: yup.string().required().min(8).max(200)
    }) as yup.ObjectSchema<ICorpo>) 
}));


const registrarSe = async (request: Request<{}, {}, ICorpo>, response: Response) => {
    const dados: ICorpo = request.body;

    const usuarioExistente = await UsuarioProvider.buscarPorCPF(dados.cpf);
    if (usuarioExistente) { return response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ erro: 'CPF já registrado' }); }

    const emailExistente = await UsuarioProvider.buscarPorEmail(dados.email); 
    if (emailExistente) { return response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ erro: 'E-mail já registrado' }); }

    const resultado = await UsuarioProvider.registrarSe(dados);
    if (resultado instanceof Error) return response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ erro: resultado.message });
    else return response.status(StatusCodes.CREATED).json({ id: resultado });
};


export { validarRegistrarSe, registrarSe };
