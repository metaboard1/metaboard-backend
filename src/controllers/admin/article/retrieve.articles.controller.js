const {error} = require('../../../helpers/response');
const { retrieveArticlesService}  = require('../../../services/admin/article');

const retrieveArticlesController = async (req, res) => {
    try {
        const response =  await retrieveArticlesService(req);
        res.status(200).json(response);
    } catch (e) {
        res.status(500).json(error('Something went wrong!', e.message))
    }
}

module.exports = retrieveArticlesController;