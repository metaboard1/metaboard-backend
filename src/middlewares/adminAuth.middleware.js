const {error} = require("../helpers/response");
const {verifyJWT} = require('../helpers/token')

const adminAuthMiddleware = () => async (req, res, next) => {
    let tokenId = req.headers.authorization || req.query.tokenId || "";
    tokenId = tokenId.replace("Bearer ", "");

    const errorMessage = "Invalid Token or Token expired";
    const response = verifyJWT(tokenId)
    if (!tokenId || !response) {
        return res.json(error(errorMessage));
    }
    req.response = response
    next();
}


module.exports = adminAuthMiddleware
