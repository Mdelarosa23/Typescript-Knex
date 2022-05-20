import knex from 'knex';
import path from 'path';

const connection = knex({
    // client: 'sqlite3',
    // connection: {
    //     filename: path.resolve(__dirname, '..', 'database.sqlite')
    // },
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        port: 3306,
        user: 'root',
        password: '',
        database: 'react_knex_typescript'
    },
    useNullAsDefault: true
});

export default connection;