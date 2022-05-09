const aws = require('../services/aws')

const uploadImage = async (req, res) => {
    const { imagem, nome } = req.body;

    const buffer = Buffer.from(imagem, 'base64');

    try {
        await aws.enviarImagem(nome, buffer)

        return res.status(200).json(nome)
    } catch (error) {
        return res.status(400).json(error.message)

    }
}

const deleteImage = async (req, res) => {
    console.log('deleção de imagem')
}

module.exports = {
    uploadImage,
    deleteImage
}