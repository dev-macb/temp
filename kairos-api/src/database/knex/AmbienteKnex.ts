import path from 'path';
import { Knex } from 'knex';


const development: Knex.Config = {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
        filename: path.resolve(__dirname, '..', '..', '..', 'database.sqlite')
    },
    migrations: {
        directory: path.resolve(__dirname, '..', 'migrations')
    },
    seeds: {
        directory: path.resolve(__dirname, '..', 'seeds')
    },
    pool: {
        afterCreate: (connection: any, done: Function) => {
            connection.run('PRAGMA foreign_keys = ON');
            done();
        }
    }
};


const test: Knex.Config = {
    ...development,
    connection: ':memory:'
};


const production: Knex.Config = {
    client: 'pg',
    connection: {
        host: process.env.BD_HOST,
        port: Number(process.env.BD_PORTA || 5432),
        database: process.env.BD_NOME,
        user: process.env.BD_USUARIO,
        password: process.env.BD_SENHA,
        ssl: { rejectUnauthorized: false }
    },
    migrations: { 
        directory: path.resolve(__dirname, '..', 'migrations') 
    },
    seeds: { 
        directory: path.resolve(__dirname, '..', 'seeds')
    }
};


export { development, test, production };