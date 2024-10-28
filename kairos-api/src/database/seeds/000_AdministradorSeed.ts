import { Knex } from 'knex';
import { ENomeTabelas } from '../ENomeTabelas';
import { HashService } from '../../server/services';


const seed = async (knex: Knex): Promise<void> => {
    const [{ count }] = await knex(ENomeTabelas.administradores).count<[{ count: number }]>('* as count');
    if (!Number.isInteger(count) || Number(count) > 0) return;

    const { ADM_APELIDO, ADM_EMAIL, ADM_SENHA } = process.env;

    const hash = await HashService.criptografar(ADM_SENHA || 'S3nh4F0rt3');
    await knex(ENomeTabelas.administradores).insert([
        {
            tipo: 1,
            apelido: ADM_APELIDO || 'cronos',
            email: ADM_EMAIL || 'cronos@email.com',
            senha: hash,
            criado_em: knex.fn.now(),
            atualizado_em: knex.fn.now()
        },
        {
            tipo: 2,
            apelido: 'kairos',
            email: 'kairos@email.com',
            senha: hash,
            criado_em: knex.fn.now(),
            atualizado_em: knex.fn.now()
        }
    ]);
};


export { seed };