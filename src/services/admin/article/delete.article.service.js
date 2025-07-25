const {success} = require('../../../helpers/response');
const {Article} = require('../../../models');

const deleteArticleService = async (req) => {

    const {id} = req.body;

    await Article.destroy({
        where:{id}
    });

    return success('Article deleted successfully.', {deletedData: id});
};

module.exports = deleteArticleService;