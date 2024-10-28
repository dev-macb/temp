import * as yup from 'yup';
import { IUsuario } from '../../models/Usuario';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ValidarConsulta } from '../../middlewares';
import { ETiposUsuario } from '../../enums/TiposUsuarios';
import { UsuarioProvider } from '../../providers/usuario';
import { ETiposSexo } from '../../enums/TiposSexos';

// Define the route params and request body interfaces
interface IParametro { id?: string; }
interface ICorpo extends Omit<IUsuario, 'id' | 'criado_em' | 'atualizado_em'> { }

// Create the validation schema using yup
const validarAtualizar = ValidarConsulta((obterEsquema) => ({
    params: obterEsquema<IParametro>(yup.object().shape({
        id: yup.string().uuid().required(),
    })),
    body: obterEsquema<ICorpo>(yup.object({
        tipo: yup.mixed<ETiposUsuario>().oneOf(Object.values(ETiposUsuario) as readonly ETiposUsuario[]).required(),
        cpf: yup.string().required().min(11).max(14),
        apelido: yup.string().required().min(4).max(100),
        nome: yup.string().required().min(4).max(100),
        nascimento: yup.date().required(),
        sexo: yup.mixed<ETiposSexo>().oneOf(Object.values(ETiposSexo) as readonly ETiposSexo[]) .required(),
        pcd: yup.boolean().required(),
        equipe: yup.string().optional().max(50),
        telefone: yup.string().optional().min(8).max(14),
        email: yup.string().email().required().min(5).max(200),
        senha: yup.string().required().min(8).max(200),
        ativo: yup.boolean().required().default(true),
    }) as yup.ObjectSchema<ICorpo>) 
}));

// Implement the update controller
const atualizar = async (request: Request<IParametro, {}, ICorpo>, response: Response) => {
    const id = request.params.id;
    const dados: ICorpo = request.body;

    if (!id) return response.status(StatusCodes.BAD_REQUEST).json({ erro: 'O parâmetro "id" precisa ser informado.' });

    try {
        const resultado = await UsuarioProvider.atualizar(id, dados);
        if (resultado instanceof Error) {
            return response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ erro: resultado.message });
        }
        return response.status(StatusCodes.NO_CONTENT).end();
    } catch (error) {
        return response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ erro: 'Erro ao atualizar o usuário.' });
    }
};

export { validarAtualizar, atualizar };
