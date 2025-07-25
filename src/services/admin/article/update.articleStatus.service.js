const {success, error} = require('../../../helpers/response');
const {Article} = require('../../../models');

const updateArticleStatusService = async (req) => {

    const {id} = req.body;

    const article = await Article.findByPk(id)

    if (!article){
        return error(`Article with ID "${id}" not found. Cannot update a non-existent article.`);
    }

    if (!article.isActive && !article.contentHtml){
        return error(`Oops article content is missing.`);
    }
    article.isActive = !article.isActive;

    await article.save();

    return success('Article status updated successfully.', {updatedData: article});

};

module.exports = updateArticleStatusService;