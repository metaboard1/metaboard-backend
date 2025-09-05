const app = require('./app')
const {error} = require('./helpers/response')
const requireDir = require('require-dir');
const {S3Client} = require("@aws-sdk/client-s3");
require('dotenv').config();

requireDir('./routes/admin');
requireDir('./routes/web');
require('../src/models');


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
});


module.exports = {app, server}