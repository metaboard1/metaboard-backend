const {success} = require('../../../helpers/response');
const {Article} = require('../../../models');
const {Op, Sequelize} = require("sequelize");

const retrieveBlogsService = async (req) => {

    const {search, page = 0, limit = 10} = req.query;

    let where = {
        isActive: true,
        isForMetaRule: true
    };

    if (search) {
        let decodedSearch = decodeURIComponent(search);

        where = {
            ...where,
            [Op.or]: decodedSearch.charAt(0) !== '#' ?
                [
                    {title: {[Op.iLike]: `%${decodedSearch}%`}},
                    {description: {[Op.iLike]: `%${decodedSearch}%`}},
                ]
                :
                [
                    Sequelize.literal(`CAST(id AS TEXT) LIKE '%${decodedSearch.slice(1)}%'`),
                    {tags: {[Op.contains]: [decodedSearch.slice(1)]}}
                ]
        }

    }

    const {count, rows} = await Article.findAndCountAll({
        where,
        attributes: {exclude: ['createdAt', 'updatedAt', 'contentHtml', 'contentCss', 'isActive', 'isForMetaRule']},
        limit,
        offset: page * limit,
        order: [['id', 'DESC']]
    });


    return success('', {rows, count});

};

module.exports = retrieveBlogsService;