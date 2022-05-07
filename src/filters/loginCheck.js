const jwt = require('jsonwebtoken');
const knex = require('../connection');
const hashCode = require('../hashCode')

const loginCheck = async (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) { return res.status(401).json('Unauthorized') }

    try {
        const token = authorization.replace('Bearer ', '').trim()
        const { id } = jwt.verify(token, hashCode)

        const currentUser = await knex('usuarios').where({ id }).first()

        if (!currentUser) { return res.status(404).json('Invalid token') }

        const { senha, ...user } = currentUser;

        req.user = user

        next()

    } catch (error) {
        return res.status(400).json(error.message)
    }
}

module.exports = loginCheck