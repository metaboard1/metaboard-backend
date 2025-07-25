const {error} = require("../helpers/response");
const {UserPermission, Permissions} = require('../models');

const permissionMiddleware = (permission) => async (req, res, next) => {

    const userId = req.response.id;
    const resPermission = await Permissions.findOne({where:{code: permission}, attributes:['id', 'code']});

    if (!resPermission) {
        return res.json(error('Invalid permission provided to permission middleware.'));
    }

    const resUserPermission = await UserPermission.findOne({userId, permissionId: resPermission.id});

    if (!resUserPermission){
        return res.json(error("Sorry you don't have the permission to access this route."));
    }
    next();
}


module.exports = permissionMiddleware;