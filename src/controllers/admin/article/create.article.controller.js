const {error} = require('../../../helpers/response');
const {createArticleService}  = require('../../../services/admin/article');

const createArticleController = async (req, res) => {
    try {
        const response =  await createArticleService(req);
        res.status(201).json(response);
    } catch (e) {
        res.status(500).json(error('Something went wrong!', e.message))
    }
}

module.exports = createArticleController;