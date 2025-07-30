const {error} = require('../../../helpers/response');
const {updatePublicationService} = require("../../../services/admin/publication");

const updatePublicationController = async (req, res) => {
    try {
        const response =  await updatePublicationService(req);
        res.status(200).json(response);
    } catch (e) {
        res.status(500).json(error('Something went wrong!', e.message))
    }
}

module.exports = updatePublicationController;