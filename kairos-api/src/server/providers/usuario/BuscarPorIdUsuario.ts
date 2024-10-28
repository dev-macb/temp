import { IUsuario } from '../../models/Usuario';
import { Knex } from '../../../database/knex';
import { ENomeTabelas } from '../../../database/ENomeTabelas';


const buscarPorId = async (id: string): Promise<IUsuario | Error> => {
    try {
        const resultado = await Knex(ENomeTabelas.usuarios)
            .select('*')
            .where('id', '=', id)
            .first();

        if (resultado) return resultado;
        else return new Error('Registro não encontrado');
    } 
    catch (erro) {
        console.log(erro);
        return new Error('Erro ao consultar o registro');
    }
};


export { buscarPorId };
