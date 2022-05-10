const knex = require('../connection')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const login = async (req, res) => {
    const { email, password } = req.body

    if (!email && !password) { return res.status(400).json('Input your email and password to login') }
    if (!email) { return res.status(400).json('Input your email to login') }
    if (!password) { return res.status(400).json('Input your password to login') }

    try {
        const user = await knex('usuarios').where({ email }).first();

        if (!user) { return res.status(400).json("Email not found!") }

        const rightPassword = await bcrypt.compare(password, user.senha);

        if (!rightPassword) { return res.status(400).json("Email and password doesn't match") }

        const token = jwt.sign({
            id: user.id,
            name: user.nome,
            email: user.email
        }, process.env.HASHCODE, { expiresIn: '24h' })

        const { senha: _, ...userData } = user

        res.status(200).json({
            user: userData,
            token
        })

        return

    } catch (error) {
        res.status(400).json(error.message)
    }
}

module.exports = {
    login
}