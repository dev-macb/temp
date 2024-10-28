import { Knex } from 'knex';
import { ENomeTabelas } from '../ENomeTabelas';
import { HashService } from '../../server/services';


const seed = async (knex: Knex): Promise<void> => {
    const [{ count }] = await knex(ENomeTabelas.usuarios).count<[{ count: number }]>('* as count');
    if (!Number.isInteger(count) || Number(count) > 0) return;

    const hash = await HashService.criptografar('senhaforte123');
    await knex(ENomeTabelas.usuarios).insert([
        {
            tipo: 1,
            cpf: '11111111111',
            apelido: 'AAA',
            nome: 'Aaa Aaa Aaa',
            nascimento: knex.fn.now(),
            sexo: 1,
            pcd: false,
            equipe: 'Aaa',
            telefone: '(11)11111-1111',
            email: 'aaa@email.com',
            senha: hash,
            ativo: true,
            criado_em: knex.fn.now(),
            atualizado_em: knex.fn.now(),
        },
        {
            tipo: 2,
            cpf: '22222222222',
            apelido: 'BBB',
            nome: 'Bbb Bbb Bbb',
            nascimento: knex.fn.now(),
            sexo: 2,
            pcd: false,
            equipe: 'Bbb',
            telefone: '(22)22222-2222',
            email: 'bbb@email.com',
            senha: hash,
            ativo: true,
            criado_em: knex.fn.now(),
            atualizado_em: knex.fn.now(),
        },
        {
            tipo: 3,
            cpf: '33333333333',
            apelido: 'CCC',
            nome: 'Ccc Ccc Ccc',
            nascimento: knex.fn.now(),
            sexo: 3,
            pcd: false,
            equipe: 'Ccc',
            telefone: '(33)33333-3333',
            email: 'ccc@email.com',
            senha: hash,
            ativo: true,
            criado_em: knex.fn.now(),
            atualizado_em: knex.fn.now(),
        }
    ]);
};


export { seed };