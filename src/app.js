const express = require('express');
const cors = require('cors');
const FileUpload = require('express-fileupload');
const helmet = require('helmet');

const app = express();

app.use(cors({
    origin: '*'
}))

app.use(FileUpload({
    tempFileDir: 'assets'
}));

app.use(express.static("assets"));
app.use(express.json());

app.disable('x-powered-by');
app.use(helmet());

// app.use(bodyParser.urlencoded({ extended: true }));


module.exports = app;