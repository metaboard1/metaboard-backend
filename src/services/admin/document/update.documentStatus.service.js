const {success, error} = require('../../../helpers/response');
const {Document} = require('../../../models');

const updateDocumentStatusService = async (req) => {

    const {id} = req.body;

    const document = await Document.findByPk(id)

    if (!document){
        return error(`Document with ID "${id}" not found. Cannot update a non-existent document.`);
    }

    if (!document.isActive && !document.file){
        return error(`Oops document file is missing.`);
    }
    document.isActive = !document.isActive;

    await document.save();

    return success('Document status updated successfully.', {updatedData: document});

};

module.exports = updateDocumentStatusService;