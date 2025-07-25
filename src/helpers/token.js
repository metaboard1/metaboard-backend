const jwt = require('jsonwebtoken');


const generateJWT = (data, options = {}) => {
    return jwt.sign(data, process.env.SECRET_KEY, options);
}
const verifyJWT = token => {
    try {
        return jwt.verify(token, process.env.SECRET_KEY);
    } catch (error) {
        return false;
    }
}

module.exports = {generateJWT, verifyJWT};