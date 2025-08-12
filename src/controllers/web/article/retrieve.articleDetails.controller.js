const {error} = require('../../../helpers/response');
const {retrieveArticleDetailsService} = require('../../../services/web/article');

const retrieveArticleDetailsController = async (req, res) => {
    try {
        const response = await retrieveArticleDetailsService(req);
        res.status(200).json(response);
    } catch (e) {
        res.status(500).json(error('Something went wrong!', e.message))
    }
}

module.exports = retrieveArticleDetailsController;