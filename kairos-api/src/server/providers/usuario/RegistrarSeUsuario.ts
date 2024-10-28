import { v4 as uuid } from 'uuid';
import { IUsuario } from '../../models/Usuario';
import { HashService } from '../../services';
import { Knex } from '../../../database/knex';
import { ENomeTabelas } from '../../../database/ENomeTabelas';


const registrarSe = async (usuario: Omit<IUsuario, 'id' | 'ativo' | 'criado_em' | 'atualizado_em'>): Promise<string | Error> => {
    try {
        const id = uuid();
        const hash = await HashService.criptografar(usuario.senha);
        const [resultado] = await Knex(ENomeTabelas.usuarios).insert({
            ...usuario, 
            id: id,
            senha: hash,
            ativo: true
        });

        if (resultado) return id;
        else return new Error('Erro ao cadastrar o registro');
    }
    catch (erro) {
        console.log(erro);
        return new Error('Erro ao cadastrar o registro');
    }
};


export { registrarSe };