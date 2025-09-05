const {error} = require("../helpers/response");
const {verifyJWT} = require('../helpers/token');
const {User} = require('../models');

const adminAuthMiddleware = () => async (req, res, next) => {
    try {
        let tokenId = req.headers.authorization || req.query.tokenId || "";
        tokenId = tokenId.replace("Bearer ", "");

        const errorMessage = "Invalid Token or Token expired";
        const response = verifyJWT(tokenId)
        if (!tokenId || !response) {
            return res.status(401).json(error(errorMessage));
        }
        const user = await User.findByPk(response.id);
        console.log(user);
        if (!user.isActive){
            return res.status(403).json(error("You are inactive by admin."));
        }
        req.response = response
        next();
    } catch (e) {
        return res.status(401).json(error(e.message));
    }

}


module.exports = adminAuthMiddleware
