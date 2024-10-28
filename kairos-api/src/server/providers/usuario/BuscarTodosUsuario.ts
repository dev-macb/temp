import { IUsuario } from '../../models/Usuario';
import { Knex } from '../../../database/knex';
import { ENomeTabelas } from '../../../database/ENomeTabelas';


const buscarTodos = async (pagina: number, limite: number, filtro: string): Promise<Partial<IUsuario>[] | Error> => {
    try {
        const resultado = await Knex(ENomeTabelas.usuarios)
            .select('id', 'nome_completo', 'cpf', 'data_nascimento', 'sexo', 'tipo')
            .where('nome_completo', 'like', `%${filtro}%`)
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