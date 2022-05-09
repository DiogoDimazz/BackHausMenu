const knex = require('knex')({
    client: 'pg',
    connection: {
        host: 'hausmenu-db-do-user-11521879-0.b.db.ondigitalocean.com',
        user: 'doadmin',
        password: 'AVNS_vHWJUNGTUD4AC-O',
        port: 25060,
        database: 'defaultdb',
    }
})

module.exports = knex;