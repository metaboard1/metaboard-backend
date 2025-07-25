const {success, error} = require('../../../helpers/response');
const {Article} = require('../../../models');

const updateArticleContentService = async (req) => {

    const {id, html, css} = req.body;

    const article = await Article.findByPk(id)

    if (!article) {
        return error(`Article with ID "${id}" not found. Cannot update a non-existent article.`);
    }

    article.contentHtml = html;
    article.contentCss = css;
    await article.save();

    return success('Article updated successfully.', article);
};

module.exports = updateArticleContentService;