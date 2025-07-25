const {error} = require('../../../helpers/response');
const {retrieveArticleByIdService} = require('../../../services/admin/article');

const retrieveArticleByIdController = async (req, res) => {
    try {
        const response = await retrieveArticleByIdService(req);
        res.status(200).json(response);
    } catch (e) {
        res.status(500).json(error('Something went wrong!', e.message))
    }
}

module.exports = retrieveArticleByIdController;