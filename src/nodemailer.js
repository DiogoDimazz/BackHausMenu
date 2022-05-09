const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    host: 'smtp.mailgun.org',
    port: 587,
    secure: false,
    auth: {
        user: 'postmaster@hausmenu.com.br',
        pass: 'd6e7f8a253b08b6ac398cb4b4f6ac611-100b5c8d-88f09b23'
    }
})

module.exports = transporter