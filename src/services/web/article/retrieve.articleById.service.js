const {success} = require('../../../helpers/response');
const {Article} = require('../../../models');

const retrieveArticleByIdService = async (req) => {

    const {id} = req.query;

    const article = await Article.findOne({
        where: {
            id,
            isActive: true
        },
        attributes: {
            exclude:['createdAt', 'updatedAt', 'isActive']
        }
    });

    return success('', article);
};

module.exports = retrieveArticleByIdService;