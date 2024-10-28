interface UsuarioModel {
    id: string;
    tipo: number;
    cpf: string;
    nome_completo: string;
    data_nascimento: Date;
    sexo: number;
    nome_equipe?: string;
    cep?: string;
    logradouro?: string;
    complemento?: string;
    numero?: number;
    bairro?: string;
    cidade?: string;
    estado?: string;
    telefone: string;
    email: string;
    senha: string;
    ativo: boolean;
    criado_em: Date;
    atualizado_em: Date;
}


export { UsuarioModel };