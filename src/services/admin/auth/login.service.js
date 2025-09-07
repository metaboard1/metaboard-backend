const {User} = require('../../../models');
const {compareBcrypt} = require("../../../helpers/bcrypt");
const {error, success} = require("../../../helpers/response");
const {generateJWT} = require("../../../helpers/token");

const loginService = async (req) => {

    const {email, password} = req.body;

    let user = await User.findOne({where: {email}});

    if (!user || !compareBcrypt(password, user.password)) return error("Invalid email or password");

    if (!user.isActive) return error("You are inactive by admin.");

    user = user.get({plain: true});
    delete user.password;

    const token = generateJWT(user, {expiresIn: '1d'});

    return success('', {user, token});

};

module.exports = loginService;