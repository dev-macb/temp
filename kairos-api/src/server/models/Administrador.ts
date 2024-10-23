interface IAdministrador {
    id: string;
    tipo: number;
    apelido: string;
    email: string;
    senha: string;
    criado_em: Date;
    atualizado_em: Date;
}


export { IAdministrador };