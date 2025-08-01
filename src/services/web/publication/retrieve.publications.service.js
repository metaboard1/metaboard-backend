const {success} = require('../../../helpers/response');
const {Publication} = require('../../../models');
const {Op} = require("sequelize");

const retrievePublicationsService = async (req) => {

    const {search, page = 0, limit = 10} = req.query;

    let where = {
        isActive: true
    };

    if (search) {
        where = {
            ...where,
            [Op.or]: [
                {title: {[Op.iLike]: `%${search}%`}},
                {description: {[Op.iLike]: `%${search}%`}},
                {isbn: {[Op.iLike]: `%${search}%`}}
            ]
        };
    }

    const {count, rows} = await Publication.findAndCountAll({
        where,
        attributes: {exclude: ['createdAt', 'updatedAt', 'isActive']},
        limit,
        offset: page * limit,
        order: [['id', 'DESC']]
    });


    return success('', {rows, count});

};

module.exports = retrievePublicationsService;