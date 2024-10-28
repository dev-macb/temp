import * as yup from 'yup';
import { IUsuario } from '../../models/Usuario';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ETiposAdministrador } from '../../enums/TiposAdministradores';
import { UsuarioProvider } from '../../providers/usuario';
import { ValidarConsulta } from '../../middlewares/ValidarConsulta';


interface ICorpo extends Omit<IUsuario, 'id' | 'ativo' | 'criado_em' | 'atualizado_em'> { }


const validarRegistrarSe = ValidarConsulta((obterEsquema) => ({
    body: obterEsquema<ICorpo>(yup.object().shape({
        tipo: yup.number().required().oneOf(Object.values(ETiposAdministrador) as number[]),
        cpf: yup.string().required().min(11).max(14),
        nome_completo: yup.string().required().min(4).max(100),
        data_nascimento: yup.date().required(),
        sexo: yup.string().required(),
        nome_equipe: yup.string().optional().max(50),
        cep: yup.string().optional().min(8).max(10),
        logradouro: yup.string().optional().max(100),
        complemento: yup.string().optional().max(100),
        numero: yup.number().integer().optional(),
        bairro: yup.string().optional().max(100),
        cidade: yup.string().optional().max(100),
        estado: yup.string().optional().max(2),
        telefone: yup.string().required().min(8).max(14),
        email: yup.string().email().required().min(5).max(200),
        senha: yup.string().required().min(8).max(200),
    })),
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
