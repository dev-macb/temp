import { IUsuario } from '../../models/Usuario';
import { Knex } from '../../../database/knex';
import { ENomeTabelas } from '../../../database/ENomeTabelas';


const buscarPorCPF = async (cpf: string): Promise<IUsuario | boolean | Error> => {
    try {
        const resultado = await Knex(ENomeTabelas.usuarios)
            .select('*')
            .where('cpf', '=', cpf)
            .first();

        if (resultado) return resultado;
        else return false;
    } 
    catch (erro) {
        console.log(erro);
        return new Error('Erro ao consultar o registro');
    }
};


export { buscarPorCPF };