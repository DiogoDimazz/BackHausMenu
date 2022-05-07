const knex = require('knex')({
    client: 'pg',
    connection: {
        user: 'azradcexqnrsws',
        host: 'ec2-18-210-64-223.compute-1.amazonaws.com',
        password: 'bcf93ef761e5d782878199bfb7f1fc87e67bd3b6979fa89bf547a942f417a7e7',
        database: 'd98r7s6m0tb6al',
        port: 5432,
        ssl: {
            rejectUnauthorized: false
        }
    }
})

module.exports = knex;