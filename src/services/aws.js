const aws = require('aws-sdk')

const spacesEndpoint = new aws.Endpoint('fra1.digitaloceanspaces.com');
const s3 = new aws.S3({
    endpoint: spacesEndpoint,
    accessKeyId: process.env.SPACE_KEY,
    secretAccessKey: process.env.SPACE_SECRET
})