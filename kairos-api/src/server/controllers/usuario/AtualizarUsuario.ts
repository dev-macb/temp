import * as yup from 'yup';
import { IUsuario } from '../../models/Usuario';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ValidarConsulta } from '../../middlewares';
import { ETiposUsuario } from '../../enums/TiposUsuario';
import { UsuarioProvider } from '../../providers/usuario';


interface IParametro { id?: string; }
interface ICorpo extends Omit<IUsuario, 'id' | 'criado_em' | 'atualizado_em'> { }


const validarAtualizar = ValidarConsulta((obterEsquema) => ({
    params: obterEsquema<IParametro>(yup.object().shape({
        id: yup.string().uuid().required(),
    })),
    body: obterEsquema<ICorpo>(yup.object().shape({
        tipo: yup.number().required().oneOf(Object.values(ETiposUsuario) as number[]),
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
        ativo: yup.boolean().required().default(true),
    }))
}));


const atualizar = async (request: Request<IParametro, {}, ICorpo>, response: Response) => {
    const id = request.params.id;
    const dados: ICorpo = request.body;

    if (!id) return response.status(StatusCodes.BAD_REQUEST).json({ erro: 'O parâmetro "id" precisa ser informado.' });

    const resultado = await UsuarioProvider.atualizar(id, dados);
    if (resultado instanceof Error) return response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ erro: resultado.message });
    else return response.status(StatusCodes.NO_CONTENT).json(resultado);
};


export { validarAtualizar, atualizar };
