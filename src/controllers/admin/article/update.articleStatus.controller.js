const {error} = require('../../../helpers/response');
const { updateArticleStatusService}  = require('../../../services/admin/article');

const updateArticleStatusController = async (req, res) => {
    try {
        const response =  await updateArticleStatusService(req);
        res.status(200).json(response);
    } catch (e) {
        res.status(500).json(error('Something went wrong!', e.message))
    }
}

module.exports = updateArticleStatusController;