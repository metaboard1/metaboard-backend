const {error} = require('../../../helpers/response');
const {updateArticleFeaturedService} = require('../../../services/admin/article');

const updateArticleFeaturedController = async (req, res) => {
    try {
        const response = await updateArticleFeaturedService(req);
        res.status(200).json(response);
    } catch (e) {
        res.status(500).json(error('Something went wrong!', e.message))
    }
}

module.exports = updateArticleFeaturedController;