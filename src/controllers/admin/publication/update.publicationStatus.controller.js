const {error} = require('../../../helpers/response');
const {updatePublicationStatusService} = require("../../../services/admin/publication");

const updatePublicationStatusController = async (req, res) => {
    try {
        const response =  await updatePublicationStatusService(req);
        res.status(200).json(response);
    } catch (e) {
        res.status(500).json(error('Something went wrong!', e.message))
    }
}

module.exports = updatePublicationStatusController;