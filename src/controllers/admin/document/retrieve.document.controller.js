const {error} = require('../../../helpers/response');
const {retrieveDocumentService} = require("../../../services/admin/document");

const retrieveDocumentController = async (req, res) => {
    try {
        const response =  await retrieveDocumentService(req);
        res.status(200).json(response);
    } catch (e) {
        res.status(500).json(error('Something went wrong!', e.message))
    }
}

module.exports = retrieveDocumentController;