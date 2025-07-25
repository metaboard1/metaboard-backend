const app = require('./app')
const {error} = require('./helpers/response')
const requireDir = require('require-dir');
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

const server = app.listen(9000,async () => {
    console.log(`app is listening on port: 9000 `)
});


module.exports = {app, server}