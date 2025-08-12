const {success} = require('../../../helpers/response');
const {Article} = require('../../../models');
const {Sequelize} = require("sequelize");

const retrieveBlogDetailsService = async (req) => {

    const {id} = req.query;

    const blogDetails = await Article.findOne({
        where: {
            id,
            isForMetaRule: true,
            isActive: true
        },
        attributes: {
            exclude: ['createdAt', 'updatedAt', 'isActive', 'isForMetaRule']
        }
    });


    const tagsArr = blogDetails.tags.map(tag => `'${tag}'`).join(', ');

    const relatedBlogs = await Article.findAll({
        where: {
            id: {[Sequelize.Op.ne]: blogDetails.id},
            tags: Sequelize.literal(`tags ?| array[${tagsArr}]`),
            isActive: true,
            isForMetaRule: true,
        },
        attribute: ['id', 'title', 'coverImage', 'publishedAt'],
        order: Sequelize.literal('RANDOM()'),
        limit: 5
    });

    return success('', {blogDetails, relatedBlogs});
};

module.exports = retrieveBlogDetailsService;