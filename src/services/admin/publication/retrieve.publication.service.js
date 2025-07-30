const {success} = require('../../../helpers/response');
const {Publication} = require('../../../models');
const {Op} = require("sequelize");

const retrievePublicationService = async (req) => {

    const {search, isActive, createdAt, page = 0, limit = 10} = req.query;

    let where = {};

    if (search) {
        where = {
            [Op.or]: [
                { title: { [Op.iLike]: `%${search}%` } },
                { description: { [Op.iLike]: `%${search}%` } },
                { isbn: { [Op.iLike]: `%${search}%` } }
            ]
        };
    }
    if (isActive) {
        where.isActive = isActive;
    }

    const {count, rows} = await Publication.findAndCountAll({
        where,
        limit,
        offset: page * limit,
        order: [['id', 'DESC']]
    });


    return success('', {rows, count});

};

module.exports = retrievePublicationService;