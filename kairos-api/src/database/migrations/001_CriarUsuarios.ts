import { Knex } from 'knex';
import { ENomeTabelas } from '../ENomeTabelas';
import { ETiposSexo } from '../../server/enums/TiposSexos';
import { ETiposUsuario } from '../../server/enums/TiposUsuarios';


async function up(knex: Knex): Promise<void> {    
    return knex.schema
        .createTable(ENomeTabelas.usuarios, tabela => {
            tabela.uuid('id', { primaryKey: true }).defaultTo(knex.fn.uuid()).primary();
            tabela.enu('tipo', Object.values(ETiposUsuario), { useNative: true, enumName: 'tipo_usuario_enum' }).notNullable();
            tabela.string('cpf', 50).notNullable().unique().index();
            tabela.string('nome', 50).notNullable();
            tabela.string('apelido', 50).notNullable();
            tabela.date('nascimento').notNullable();
            tabela.enu('sexo', Object.values(ETiposSexo), { useNative: true, enumName: 'sexo_enum' }).notNullable();
            tabela.boolean('pcd').notNullable().defaultTo(false);
            tabela.string('equipe', 50).nullable();
            tabela.string('telefone', 50).notNullable();
            tabela.string('email', 200).notNullable().unique();
            tabela.string('senha', 200).notNullable();
            tabela.boolean('ativo').notNullable().defaultTo(true);
            tabela.timestamp('criado_em').notNullable().defaultTo(knex.fn.now());
            tabela.timestamp('atualizado_em').notNullable().defaultTo(knex.fn.now());
        })
        .then(() => {
            console.log(`[*] Tabela "${ENomeTabelas.usuarios}" foi criada.`);
        });
}


async function down(knex: Knex): Promise<void> {
    return knex.schema
        .dropTable(ENomeTabelas.usuarios)
        .then(() => { console.log(`[*] A tabela "${ENomeTabelas.usuarios}" foi deletada.`); });
}


export { up, down };