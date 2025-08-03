const {error} = require('../../../helpers/response');
const {retrieveBlogByIdService} = require("../../../services/web/blog");

const retrieveBlogByIdController = async (req, res) => {
    try {
        const response = await retrieveBlogByIdService(req);
        res.status(200).json(response);
    } catch (e) {
        res.status(500).json(error('Something went wrong!', e.message))
    }
}

module.exports = retrieveBlogByIdController;