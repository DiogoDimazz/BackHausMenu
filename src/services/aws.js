const aws = require('aws-sdk')

const spacesEndpoint = new aws.Endpoint('fra1.digitaloceanspaces.com');
const s3 = new aws.S3({
    endpoint: spacesEndpoint,
    accessKeyId: process.env.SPACE_KEY,
    secretAccessKey: process.env.SPACE_SECRET
})

const enviarImagem = async (nome, imagem) => {
    return await s3.putObject({
        Bucket: process.env.SPACE_BUCKET,
        Key: nome,
        Body: imagem,
        ACL: 'public-read'
    }).promise()
}

const excluirImagem = async (nome) => {
    return await s3.deleteObject({
        Bucket: process.env.SPACE_BUCKET,
        Key: nome
    }).promise()
}

module.exports = {
    enviarImagem,
    excluirImagem
}