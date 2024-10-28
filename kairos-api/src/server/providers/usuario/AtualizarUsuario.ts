import { IUsuario } from '../../models/Usuario';
import { HashService } from '../../services';
import { Knex } from '../../../database/knex';
import { ENomeTabelas } from '../../../database/ENomeTabelas';


interface IUsuarioAtualizar extends Omit<IUsuario, 'id' | 'criado_em' | 'atualizado_em'> { }


const atualizar = async (id: string, usuario: IUsuarioAtualizar): Promise<void | Error> => {
    try {
        const [{ contador }] = await Knex(ENomeTabelas.usuarios)
            .where('id', '=', id)
            .count<[{ contador: number }]>('* as contador');
        
        if (contador === 0) {
            return new Error('Registro não encontrado ou inexistente');
        }

        const hash = await HashService.criptografar(usuario.senha);
        const resultado = await Knex(ENomeTabelas.usuarios)
            .update({ 
                ...usuario, 
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
