const {error} = require('../../../helpers/response');
const {retrieveBlogDetailsService} = require("../../../services/web/blog");

const retrieveBlogDetailsController = async (req, res) => {
    try {
        const response = await retrieveBlogDetailsService(req);
        res.status(200).json(response);
    } catch (e) {
        res.status(500).json(error('Something went wrong!', e.message))
    }
}

module.exports = retrieveBlogDetailsController;