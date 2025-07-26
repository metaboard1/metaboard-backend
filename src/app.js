const express = require('express');
const cors = require('cors');
const FileUpload = require('express-fileupload');


const app = express();

app.use(cors({
    origin: [
        'http://localhost:3000',
        "https://metaboard-admin-panel.vercel.app"
    ],
    credentials: true,
}))

// app.options('*', cors());

app.use(FileUpload({
    tempFileDir: 'assets'
}));

app.use(express.static("assets"));
app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));


module.exports = app;