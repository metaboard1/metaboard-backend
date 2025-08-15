const {error} = require('../../../helpers/response');
const {retrieveDocumentsService} = require("../../../services/web/document");

const retrieveDocumentsController = async (req, res) => {
    try {
        const response =  await retrieveDocumentsService(req);
        res.status(200).json(response);
    } catch (e) {
        res.status(500).json(error('Something went wrong!', e.message))
    }
}

module.exports = retrieveDocumentsController;