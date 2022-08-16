const yup = require('./yup')

const signupUserSchema = yup.object().shape({
    email:
        yup
            .string()
            .email('O email precisa ser válido')
            .required('Favor informar o email'),
    password:
        yup
            .string()
            .min(5)
            .required('Favor informar uma senha'),
    confirmPassword:
        yup
            .string()
            .required('Favor confirmar a senha')
})

module.exports = signupUserSchema