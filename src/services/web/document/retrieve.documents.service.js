const {success} = require('../../../helpers/response');
const {Document} = require('../../../models');
const {Op} = require("sequelize");

const retrieveDocumentsService = async (req) => {

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
            ]
        };
    }

    const {count, rows} = await Document.findAndCountAll({
        where,
        attributes: {exclude: ['id', 'createdAt', 'updatedAt', 'isActive']},
        limit,
        offset: page * limit,
        order: [['id', 'DESC']]
    });


    return success('', {rows, count});

};

module.exports = retrieveDocumentsService;