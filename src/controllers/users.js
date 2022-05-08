const knex = require('../connection')
const bcrypt = require('bcrypt')

const signupUser = async (req, res) => {
    const { email, password, confirmPassword } = req.body

    if (!email && !password && !confirmPassword) {
        return res.status(400).json('Input your email, choose a password and confirm it to sign up')
    }

    if (!email) { return res.status(400).json('Email is required') }
    if (!password) { return res.status(400).json('A password is required') }
    if (password.length < 5) { return res.status(400).json('The password needs at least 5 letters') }
    if (!confirmPassword || confirmPassword !== password) { return res.status(400).json("The passwords doesn't match") }

    try {
        const uniqueEmail = await knex('usuarios').where({ email }).first()

        if (uniqueEmail) { return res.status(400).json('The email already exists!') }

        const criptoPassword = await bcrypt.hash(password, 10)

        const user = await knex('usuarios').insert({
            email,
            senha: criptoPassword
        })

        if (!user) { return res.status(400).json("Sorry! The user couldn't be registered") }

        return res.status(200).json("User registered! Let's cook!")

    } catch (error) {
        return res.status(400).json(error.message)
    }
}

const updateUser = async (req, res) => {
    const { email, genero, dieta, nome } = req.body
    const { id } = req.user

    try {
        const updatedUser = await knex('usuarios').where({ id }).update({
            email, genero, dieta, nome
        })

        if (!updatedUser) { return res.status(400).json("The user couldn't be updated") }

        return res.status(200).json('Usuário atualizado com sucesso')
    } catch (error) {
        return res.status(400).json(error.message)
    }

}

const deleteUser = async (req, res) => {
    const { id } = req.user
    const { password } = req.body

    if (!password) { return res.status(400).json('Please confirm password to delete your account') }

    try {
        const currentUser = await knex('usuarios').where({ id }).first()

        const rightPassword = await bcrypt.compare(password, currentUser.senha)
        if (!rightPassword) { return res.status(400).json("Password doesn't match") }

        await knex('usuarios').del().where({ id })

        return res.status(200).json('The user was deleted')

    } catch (error) {
        return res.status(400).json(error.message)
    }
}

module.exports = {
    signupUser,
    updateUser,
    deleteUser
}