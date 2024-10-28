import { IUsuario } from '../../models/Usuario';
import { Knex } from '../../../database/knex';
import { ENomeTabelas } from '../../../database/ENomeTabelas';


const autenticar = async (email: string): Promise<IUsuario | Error> => {
    try {
        const resultado = await Knex(ENomeTabelas.usuarios)
            .select('*')
            .where('email', '=', email)
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
