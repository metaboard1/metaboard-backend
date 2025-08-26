const app = require('./app')
const {error} = require('./helpers/response')
const requireDir = require('require-dir');
require('dotenv').config();
const {v2: cloudinary} = require('cloudinary');

requireDir('./routes/admin');
requireDir('./routes/web');
// requireDir('./routes');
require('../src/models');
const {S3Client} = require("@aws-sdk/client-s3");


app.use((err, req, res, next) => {
    res.json(error(err.message));
});


// const server = app.listen(8000, '0.0.0.0',async () => {
//     console.log(`app is listening on port: 8000 `)
// });

const server = app.listen(process.env.PORT, async () => {
    console.log(`app is listening on port: ${process.env.PORT} `);

    global.s3Client = new S3Client({
        region: process.env.AWS_REGION,
        credentials: {
            accessKeyId: process.env.AWS_S3_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY_ID
        }
    });

    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_CLOUD_API_KEY,
        api_secret: process.env.CLOUDINARY_CLOUD_SECRET_KEY
    });
});


module.exports = {app, server}