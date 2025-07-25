const {error} = require('../../../helpers/response');
const { deleteArticleService}  = require('../../../services/admin/article');

const deleteArticleController = async (req, res) => {
    try {
        const response =  await deleteArticleService(req);
        res.status(200).json(response);
    } catch (e) {
        res.status(500).json(error('Something went wrong!', e.message))
    }
}

module.exports = deleteArticleController;