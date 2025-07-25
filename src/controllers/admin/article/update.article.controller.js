const {error} = require('../../../helpers/response');
const { updateArticleService}  = require('../../../services/admin/article');

const updateArticleController = async (req, res) => {
    try {
        const response =  await updateArticleService(req);
        res.status(200).json(response);
    } catch (e) {
        res.status(500).json(error('Something went wrong!', e.message))
    }
}

module.exports = updateArticleController;