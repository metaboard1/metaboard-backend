const {success, error} = require('../../../helpers/response');
const {Article} = require('../../../models');
const {Op} = require("sequelize");

const retrieveArticlesService = async (req) => {

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
                {author: {[Op.iLike]: `%${search}%`}}
            ]
        };
    }

    const {count, rows} = await Article.findAndCountAll({
        where,
        attributes: {exclude: ['createdAt', 'updatedAt', 'contentHtml', 'contentCss', 'isActive', 'estimateReadTime']},
        limit,
        offset: page * limit,
        order: [['id', 'DESC']]
    });

    const featuredArticle = await Article.findOne({
        where: {
            isFeatured: true,
            isActive: true
        },
        attributes: {exclude: ['createdAt', 'updatedAt', 'contentHtml', 'contentCss', 'isActive']},
    });


    return success('', {rows, featuredArticle, count});

};

module.exports = retrieveArticlesService;