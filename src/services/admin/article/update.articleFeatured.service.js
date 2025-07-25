const {success, error} = require('../../../helpers/response');
const {Article} = require('../../../models');

const updateArticleFeaturedService = async (req) => {

    const {id} = req.body;

    const article = await Article.findByPk(id)

    if (!article) {
        return error(`Article with ID "${id}" not found. Cannot update a non-existent article.`);
    }
    if (!article.isActive) {
        return error('Please activate the article before setting it as featured.');
    }

    await Article.update({
        isFeatured: false
    }, {
        where: {
            isFeatured: true
        }
    });

    article.isFeatured = true;

    await article.save();

    return success('Article set as featured.', {updatedData: article});

};

module.exports = updateArticleFeaturedService;