const {error} = require('../../../helpers/response');
const {updateDocumentService} = require("../../../services/admin/document");

const updateDocumentController = async (req, res) => {
    try {
        const response =  await updateDocumentService(req);
        res.status(200).json(response);
    } catch (e) {
        res.status(500).json(error('Something went wrong!', e.message))
    }
}

module.exports = updateDocumentController;