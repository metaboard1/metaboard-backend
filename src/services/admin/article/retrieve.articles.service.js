const {success, error} = require('../../../helpers/response');
const {Article} = require('../../../models');
const {Op} = require("sequelize");

const retrieveArticlesService = async (req) => {

    const {search, isActive, createdAt, page = 0, limit = 10} = req.query;

    let where = {};

    if (search) {
        where = {
            [Op.or]: [
                { title: { [Op.iLike]: `%${search}%` } },
                { description: { [Op.iLike]: `%${search}%` } },
                { author: { [Op.iLike]: `%${search}%` } }
            ]
        };
    }
    if (isActive) {
        where.isActive = isActive;
    }

    const {count, rows} = await Article.findAndCountAll({
        where,
        limit,
        offset: page * limit,
        order: [['id', 'DESC']]
    });


    return success('', {rows, count});

};

module.exports = retrieveArticlesService;