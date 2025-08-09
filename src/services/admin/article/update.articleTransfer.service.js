const {success, error} = require('../../../helpers/response');
const {Article} = require('../../../models');

const updateArticleTransferService = async (req) => {

    const {id} = req.body;

    const article = await Article.findByPk(id)

    if (!article) {
        return error(`Article with ID "${id}" not found. Cannot update a non-existent article.`);
    }

    article.isForMetaRule = !article.isForMetaRule;

    await article.save();

    return success('Article transferred to metarule.', {updatedData: article});

};

module.exports = updateArticleTransferService;