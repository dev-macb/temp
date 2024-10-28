import { ETiposSexo } from "../enums/TiposSexos";
import { ETiposUsuario } from "../enums/TiposUsuarios";


interface IUsuario {
    id: string;
    tipo: ETiposUsuario;
    cpf: string;
    apelido: string;
    nome: string;
    nascimento: Date;
    sexo: ETiposSexo;
    pcd: boolean;
    equipe?: string;
    telefone?: string;
    email: string;
    senha: string;
    ativo: boolean;
    criado_em: Date;
    atualizado_em: Date;
}


export { IUsuario };