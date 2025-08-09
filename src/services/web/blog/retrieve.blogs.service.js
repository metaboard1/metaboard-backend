const {success} = require('../../../helpers/response');
const {Article} = require('../../../models');
const {Op} = require("sequelize");

const retrieveBlogsService = async (req) => {

    const {search, page = 0, limit = 10} = req.query;

    let where = {
        isActive: true,
        isForMetaRule: true
    };

    if (search) {
        const trimSearch = search.trim()
        where = {
            ...where,
            [Op.or]: [
                {title: {[Op.iLike]: `%${trimSearch}%`}},
                {description: {[Op.iLike]: `%${trimSearch}%`}},
            ]
        };
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