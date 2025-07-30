const {error} = require('../../../helpers/response');
const {retrievePublicationService} = require("../../../services/admin/publication");

const retrievePublicationController = async (req, res) => {
    try {
        const response =  await retrievePublicationService(req);
        res.status(200).json(response);
    } catch (e) {
        res.status(500).json(error('Something went wrong!', e.message))
    }
}

module.exports = retrievePublicationController;