const {error} = require('../../../helpers/response');
const {createDocumentService} = require("../../../services/admin/document");

const createDocumentController = async (req, res) => {
    try {
        const response =  await createDocumentService(req);
        res.status(201).json(response);
    } catch (e) {
        res.status(500).json(error('Something went wrong!', e.message))
    }
}

module.exports = createDocumentController;