const knex = require('knex')({
    client: 'pg',
    connection: {
        host: DB_HOST,
        user: DB_USER,
        password: DB_PASSWORD,
        database: DB_DATABASE,
        ssl: {
            rejectUnauthorized: false
        }
    }
})

module.exports = knex;