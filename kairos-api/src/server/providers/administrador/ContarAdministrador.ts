import { Knex } from '../../../database/knex';
import { ENomeTabelas } from '../../../database/ENomeTabelas';


const contar = async (parametro: string, filtro = ''): Promise<number | Error> => {
    try {
        const [{ contagem }] = await Knex(ENomeTabelas.administradores)
            .where(parametro, 'like', `%${filtro}%`)
            .count<[{ contagem: number }]>('* as contagem');

        if (Number.isInteger(Number(contagem))) return Number(contagem);
        else return new Error('Erro ao consultar a quantidade total de registros');
    } 
    catch (erro) {
        console.log(erro);
        return new Error('Erro ao consultar a quantidade total de registros');
    }
};


export { contar };
