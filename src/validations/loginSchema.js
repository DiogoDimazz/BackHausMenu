const yup = require('./yup')

const loginSchema = yup.object().shape({
    email:
        yup
            .string()
            .email('O email precisa ser válido')
            .required('Favor informar o email'),
    password:
        yup
            .string()
            .required('Favor informar uma senha'),
})

module.exports = loginSchema