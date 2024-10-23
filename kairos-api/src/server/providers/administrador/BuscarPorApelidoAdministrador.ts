import { Knex } from '../../../database/knex';
import { IAdministrador } from '../../models';
import { ENomeTabelas } from '../../../database/ENomeTabelas';


const buscarPorApelido = async (apelido: string): Promise<IAdministrador | boolean | Error> => {
    try {
        const resultado = await Knex(ENomeTabelas.administradores)
            .select('*')
            .where('apelido', '=', apelido)
            .first();

        if (resultado) return resultado;
        else return false;
    } 
    catch (erro) {
        console.log(erro);
        return new Error('Erro ao consultar o registro');
    }
};


export { buscarPorApelido };