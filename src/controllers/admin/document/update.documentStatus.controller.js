const {error} = require('../../../helpers/response');
const {updateDocumentStatusService} = require("../../../services/admin/document");

const updateDocumentStatusController = async (req, res) => {
    try {
        const response =  await updateDocumentStatusService(req);
        res.status(200).json(response);
    } catch (e) {
        res.status(500).json(error('Something went wrong!', e.message))
    }
}

module.exports = updateDocumentStatusController;