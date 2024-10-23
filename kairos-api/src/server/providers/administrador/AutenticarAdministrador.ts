import { Knex } from '../../../database/knex';
import { IAdministrador } from '../../models';
import { ENomeTabelas } from '../../../database/ENomeTabelas';


const autenticar = async (apelido: string): Promise<IAdministrador | Error> => {
    try {
        const resultado = await Knex(ENomeTabelas.administradores)
            .select('*')
            .where('apelido', '=', apelido)
            .first();

        if (resultado) return resultado;
        else return new Error('Registro não encontrado');
    } 
    catch (erro) {
        console.log(erro);
        return new Error('Erro ao consultar o registro');
    }
};


export { autenticar };
