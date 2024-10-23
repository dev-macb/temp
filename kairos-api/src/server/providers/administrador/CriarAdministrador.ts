import { v4 as uuid } from 'uuid';
import { HashService } from '../../services';
import { Knex } from '../../../database/knex';
import { ENomeTabelas } from '../../../database/ENomeTabelas';
import { IAdministrador } from '../../models/Administrador';


const criar = async (administrador: Omit<IAdministrador, 'id' | 'criado_em' | 'atualizado_em'>): Promise<string | Error> => {
    try {
        const id = uuid();
        const hash = await HashService.criptografar(administrador.senha);
        const [resultado] = await Knex(ENomeTabelas.administradores).insert({
            ...administrador, 
            id: id,
            senha: hash 
        });

        if (resultado) return id;
        else return new Error('Erro ao cadastrar o registro');
    }
    catch (erro) {
        console.log(erro);
        return new Error('Erro ao cadastrar o registro');
    }
};


export { criar };