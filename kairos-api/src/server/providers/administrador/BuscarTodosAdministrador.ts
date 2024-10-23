import { Knex } from '../../../database/knex';
import { IAdministrador } from '../../models';
import { ENomeTabelas } from '../../../database/ENomeTabelas';


const buscarTodos = async (pagina: number, limite: number, filtro: string): Promise<Partial<IAdministrador>[] | Error> => {
    try {
        const resultado = await Knex(ENomeTabelas.administradores)
            .select('id', 'tipo', 'apelido', 'email', 'criado_em', 'atualizado_em')
            .where('apelido', 'like', `%${filtro}%`)
            .offset((pagina - 1) * limite)
            .limit(limite);

        return resultado;
    } 
    catch (error) {
        console.log(error);
        return new Error('Erro ao consultar os registros');
    }
};


export { buscarTodos };