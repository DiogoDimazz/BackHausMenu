const knex = require('knex')({
    client: 'pg',
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        ssl: {
            rejectUnauthorized: false
        }
    }
})

// const knex = require('knex')({
//     client: 'pg',
//     connection: {
//         host: 'localhost',
//         user: 'postgres',
//         password: 'postgres',
//         port: 5432,
//         database: 'hausmenu'
//     }
// })

// const knex = require('knex')({
//     client: 'pg',
//     connection: {
//         host: 'localhost',
//         user: 'postgres',
//         password: 'cubos2412',
//         port: 5432,
//         database: 'hausmenu'
//     }
// });

module.exports = knex;