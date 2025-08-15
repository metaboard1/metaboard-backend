const {success} = require('../../../helpers/response');
const {Document} = require('../../../models');
const {Op, Sequelize} = require("sequelize");

const retrieveDocumentService = async (req) => {

    const {search, isActive, createdAt, page = 0, limit = 10} = req.query;

    let where = {};

    if (search) {
        let decodedSearch = decodeURIComponent(search);
        where = {
            [Op.or]: decodedSearch.charAt(0) !== '#' ?
                [
                    {title: {[Op.iLike]: `%${search}%`}},
                    {description: {[Op.iLike]: `%${search}%`}},
                ]
                :
                [
                    Sequelize.literal(`CAST(id AS TEXT) LIKE '%${decodedSearch.slice(1)}%'`),
                ]
        }

    }

    if (isActive) {
        where.isActive = isActive;
    }

    const {count, rows} = await Document.findAndCountAll({
        where,
        limit,
        offset: page * limit,
        order: [['id', 'DESC']]
    });


    return success('', {rows, count});

};

module.exports = retrieveDocumentService;