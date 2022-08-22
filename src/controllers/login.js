const knex = require('../connection');
const bcrypt = require('bcrypt');
const loginSchema = require('../validations/loginSchema')
const jwt = require('jsonwebtoken')

const login = async (req, res) => {
    const { email, password } = req.body;


    try {
        const bodyFormatted = {
            email: email.trim(),
            password: password.trim()
        }


        await loginSchema.validate(bodyFormatted)


        const userFound = await knex('usuarios').where({ email }).first();
        if (!userFound) { return res.status(404).json("Invalid email or password!") }

        const passwordCompare = await bcrypt.compare(password, userFound.senha)
        if (!passwordCompare) { return res.status(400).json('Invalid email or password!') }


        const token = jwt.sign({ id: userFound.id }, process.env.HASHCODE, { expiresIn: '12h' })


        return res.status(200).json({
            id: userFound.id,
            user: userFound.nome ? userFound.nome : userFound.email,
            token
        })

    } catch (error) {
        return res.status(400).json(error.message)
    }
}

module.exports = login