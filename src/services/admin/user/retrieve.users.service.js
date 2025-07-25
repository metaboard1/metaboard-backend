
const {success, error} = require('../../../helpers/response');
const {User} = require('../../../models');
const {Op} = require("sequelize");

const retrieveUsersService = async (req) => {

    const {search, isActive, createdAt, page = 0, limit = 10} = req.query;

    let where = {};

    if (search) {
        where = {
            [Op.or]: [
                { name: { [Op.iLike]: `%${search}%` } },
                { email: { [Op.iLike]: `%${search}%` } },
            ]
        };
    }
    if (isActive) {
        where.isActive = isActive;
    }

    const {count, rows} = await User.findAndCountAll({
        where,
        limit,
        offset: page * limit,
        order: [['id', 'DESC']]
    });


    return success('', {rows, count});

};

module.exports = retrieveUsersService;