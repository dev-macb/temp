import { Knex } from 'knex';
import { ENomeTabelas } from '../ENomeTabelas';


async function up(knex: Knex): Promise<void> {    
    return knex.schema
        .createTable(ENomeTabelas.administradores, tabela => {
            tabela.uuid('id', { primaryKey: true }).defaultTo(knex.fn.uuid()).primary();
            tabela.integer('tipo').notNullable().checkPositive();
            tabela.string('apelido', 50).notNullable().checkLength('>=', 4).unique().index(),
            tabela.string('email', 200).notNullable().checkLength('>=', 4).unique();
            tabela.string('senha', 200).notNullable().checkLength('>=', 8);
            tabela.timestamp('criado_em').notNullable().defaultTo(knex.fn.now());
            tabela.timestamp('atualizado_em').notNullable().defaultTo(knex.fn.now());
        })
        .then(() => {
            console.log(`[*] Tabela "${ENomeTabelas.administradores}" foi criada.`);
        });
}


async function down(knex: Knex): Promise<void> {
    return knex.schema
        .dropTable(ENomeTabelas.administradores)
        .then(() => { console.log(`[*] A tabela "${ENomeTabelas.administradores}" foi deletada.`); });
}


export { up, down };
