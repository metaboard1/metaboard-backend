const {error} = require('../../../helpers/response');
const {deleteDocumentService} = require("../../../services/admin/document");

const deleteDocumentController = async (req, res) => {
    try {
        const response =  await deleteDocumentService(req);
        res.status(200).json(response);
    } catch (e) {
        res.status(500).json(error('Something went wrong!', e.message))
    }
}

module.exports = deleteDocumentController;