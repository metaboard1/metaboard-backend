const {error} = require('../../../helpers/response');
const {retrieveTagsService} = require("../../../services/web/tag");

const retrieveTagsController = async (req, res) => {
    try {
        const response =  await retrieveTagsService(req);
        res.status(200).json(response);
    } catch (e) {
        res.status(500).json(error('Something went wrong!', e.message))
    }
}

module.exports = retrieveTagsController;