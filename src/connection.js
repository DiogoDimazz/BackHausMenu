const knex = require('knex')({
    client: 'pg',
    connection: {
        host: 'localhost',
        user: 'postgres',
        password: 'postgres',
        port: 5432,
        database: 'hausmenu',
        // ssl: {
        //     rejectUnauthorized: false
        // }
    }
})

module.exports = knex;