const {success} = require('../../../helpers/response');
const {Article} = require('../../../models');
const {Op, Sequelize} = require("sequelize");

const retrieveArticlesService = async (req) => {

    const {search, page = 0, limit = 10} = req.query;

    let where = {
        isActive: true,
        isForMetaRule: false
    };

    if (search) {
        let decodedSearch = decodeURIComponent(search);

        where = {
            ...where,
            [Op.or]: decodedSearch.charAt(0) !== '#' ?
                [
                    {title: {[Op.iLike]: `%${decodedSearch}%`}},
                    {description: {[Op.iLike]: `%${decodedSearch}%`}},
                    {author: {[Op.iLike]: `%${search}%`}}
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
        attributes: {exclude: ['createdAt', 'updatedAt', 'contentHtml', 'contentCss', 'isActive', 'estimateReadTime', 'isForMetaRule']},
        limit,
        offset: page * limit,
        order: [['id', 'DESC']]
    });

    const featuredArticle = await Article.findOne({
        where: {
            isFeatured: true,
            isActive: true
        },
        attributes: {exclude: ['createdAt', 'updatedAt', 'contentHtml', 'contentCss', 'isActive', 'isForMetaRule']},
    });


    return success('', {rows, featuredArticle, count});

};

module.exports = retrieveArticlesService;