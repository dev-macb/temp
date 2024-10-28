import { Knex } from '../../../database/knex';
import { ENomeTabelas } from '../../../database/ENomeTabelas';


const deletar = async (id: string): Promise<void | Error> => {
    try {
        const resultado = await Knex(ENomeTabelas.usuarios)
            .where('id', '=', id)
            .del();

        if (resultado > 0) return;
        else return new Error('Erro ao apagar o registro');
    } 
    catch (erro) {
        console.log(erro);
        return new Error('Erro ao apagar o registro');
    }
};

export { deletar };