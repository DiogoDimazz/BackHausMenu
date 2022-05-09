const knex = require('knex')({
    client: 'pg',
    connection: {
        host: 'app-540972b3-5f81-4af2-b837-e647e01da5d3-do-user-11521879-0.b.db.ondigitalocean.com',
        user: 'db-hausmenu',
        password: 'AVNS_09HVtjpzpowyYit',
        port: 25060,
        database: 'db-hausmenu',
        ssl: {
            rejectUnauthorized: false
        }
    }
})

module.exports = knex;