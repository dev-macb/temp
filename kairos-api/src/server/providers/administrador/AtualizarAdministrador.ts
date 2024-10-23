import { HashService } from '../../services';
import { Knex } from '../../../database/knex';
import { IAdministrador } from '../../models';
import { ENomeTabelas } from '../../../database/ENomeTabelas';


interface IPessoa extends Omit<IAdministrador, 'id' | 'criado_em' | 'atualizado_em'> { }


const atualizar = async (id: string, administrador: IPessoa): Promise<void | Error> => {
    try {
        const [{ contador }] = await Knex(ENomeTabelas.administradores)
            .where('id', '=', id)
            .count<[{ contador: number }]>('* as contador');
        
        if (contador === 0) {
            return new Error('Registro não encontrado ou inexistente');
        }

        const hash = await HashService.criptografar(administrador.senha);
        const resultado = await Knex(ENomeTabelas.administradores)
            .update({ 
                ...administrador, 
                senha: hash,
                atualizado_em: Knex.fn.now() 
            })
            .where('id', '=', id);

        if (resultado > 0) return;
        else return new Error('Erro ao atualizar o registro');
    } 
    catch (error) {
        console.log(error);
        return new Error('Erro ao atualizar o registro');
    }
};


export { atualizar };
