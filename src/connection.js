const knex = require('knex')({
    client: 'pg',
    connection: {
        host: 'localhost',
        user: 'postgres',
        password: 'postgres',
        port: 5432
        // host: 'ec2-18-210-64-223.compute-1.amazonaws.com',
        // user: 'azradcexqnrsws',
        // password: 'bcf93ef761e5d782878199bfb7f1fc87e67bd3b6979fa89bf547a942f417a7e7',
        // port: 5432,
        // database: 'd98r7s6m0tb6al',
        // ssl: {
        //     rejectUnauthorized: false
        // }
    }
})

module.exports = knex;