const {success, error} = require('../../../helpers/response');
const {Article} = require('../../../models');
const {fsUnlinkFromDisk, cloudUnlinkFile} = require("../../../helpers/fileUpload");

const deleteArticleService = async (req) => {

    const {id} = req.body;

    const article = await Article.findByPk(id);

    if (!article) {
        return error(`Article with ID ${id} not found. Cannot delete a non-existent article.`);
    }

    const isDeleted = await Article.destroy({
        where: {id}
    });

    if (isDeleted && article.coverImage) {
        fsUnlinkFromDisk(article.coverImage);
        cloudUnlinkFile('articles', article.coverImage.split('.')[0]);
    }

    return success('Article deleted successfully.', {deletedData: id});
};

module.exports = deleteArticleService;