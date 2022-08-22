const knex = require('../connection');
const bcrypt = require('bcrypt');
const loginSchema = require('../validations/loginSchema')
const jwt = require('jsonwebtoken')

const login = async (req, res) => {
    const { email, password } = req.body;

    console.log('teste 9');

    try {
        const bodyFormatted = {
            email: email.trim(),
            password: password.trim()
        }

        console.log('teste 17');

        await loginSchema.validate(bodyFormatted)

        console.log('teste 21');

        const userFound = await knex('usuarios').where({ email }).first();
        if (!userFound) { return res.status(404).json("Invalid email or password!") }

        const passwordCompare = await bcrypt.compare(password, userFound.senha)
        if (!passwordCompare) { return res.status(400).json('Invalid email or password') }

        console.log('teste 29');

        const token = jwt.sign({ id: userFound.id }, process.env.HASHCODE, { expiresIn: '12h' })

        console.log('teste 33');

        return res.status(200).json({
            id: userFound.id,
            user: userFound.nome ? userFound.nome : userFound.email,
            token
        })

    } catch (error) {
        console.log('teste 42');
        return res.status(400).json(error.message)
    }
}

module.exports = login