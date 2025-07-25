const {error} = require('../../../helpers/response');
const { updateArticleContentService}  = require('../../../services/admin/article');

const updateArticleContentController = async (req, res) => {
    try {
        const response =  await updateArticleContentService(req);
        res.status(200).json(response);
    } catch (e) {
        res.status(500).json(error('Something went wrong!', e.message))
    }
}

module.exports = updateArticleContentController;