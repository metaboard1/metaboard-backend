const jwt = require('jsonwebtoken');


const generateJWT = (data, options = {}) => {
    return jwt.sign(data, process.env.JWT_SECRET_KEY, options);
}
const verifyJWT = token => {
    return jwt.verify(token, process.env.JWT_SECRET_KEY);
}

module.exports = {generateJWT, verifyJWT};