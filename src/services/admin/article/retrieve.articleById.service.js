const {success} = require('../../../helpers/response');
const {Article} = require('../../../models');

const retrieveArticleByIdService = async (req) => {

    const {id} = req.query;

    const article = await Article.findByPk(id,{
        attributes: ['id', 'contentHtml', 'contentCss']
    });

    return success('', article);
};

module.exports = retrieveArticleByIdService;