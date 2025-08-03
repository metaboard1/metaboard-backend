const {error} = require('../../../helpers/response');
const { updateArticleTransferService} = require('../../../services/admin/article');

const updateArticleTransferController = async (req, res) => {
    try {
        const response = await updateArticleTransferService(req);
        res.status(200).json(response);
    } catch (e) {
        res.status(500).json(error('Something went wrong!', e.message))
    }
}

module.exports = updateArticleTransferController;