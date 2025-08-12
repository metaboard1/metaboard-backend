const {success} = require('../../../helpers/response');
const {Article} = require('../../../models');
const {Sequelize} = require("sequelize");

const retrieveArticleDetailsService = async (req) => {

    const {id} = req.query;

    const articleDetails = await Article.findOne({
        where: {
            id,
            isActive: true,
            isForMetaRule: false
        },
        attributes: {
            exclude: ['createdAt', 'updatedAt', 'isActive', 'isForMetaRule']
        }
    });

    const tagsArr = articleDetails.tags.map(tag => `'${tag}'`).join(', ');

    const relatedArticles = await Article.findAll({
        where: {
            id: {[Sequelize.Op.ne]: articleDetails.id},
            tags: Sequelize.literal(`tags ?| array[${tagsArr}]`),
            isActive: true,
            isForMetaRule: false,
        },
        attribute: ['id', 'title', 'coverImage', 'publishedAt'],
        order: Sequelize.literal('RANDOM()'),
        limit: 5
    });

    return success('', {articleDetails, relatedArticles});

};

module.exports = retrieveArticleDetailsService;