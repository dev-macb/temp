import { Knex } from '../../../database/knex';
import { IAdministrador } from '../../models';
import { ENomeTabelas } from '../../../database/ENomeTabelas';


const buscarPorEmail = async (email: string): Promise<IAdministrador | boolean | Error> => {
    try {
        const resultado = await Knex(ENomeTabelas.administradores)
            .select('*')
            .where('email', '=', email)
            .first();

        if (resultado) return resultado;
        else return false;
    } 
    catch (erro) {
        console.log(erro);
        return new Error('Erro ao consultar o registro');
    }
};


export { buscarPorEmail };