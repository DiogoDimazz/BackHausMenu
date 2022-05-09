const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
        user: 'e4cc708276111a',
        pass: '8b2cc3affb8252'
    }
})

module.exports = transporter
