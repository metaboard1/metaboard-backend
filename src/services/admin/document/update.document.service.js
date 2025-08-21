const {success, error} = require('../../../helpers/response');
const {Document} = require('../../../models');
const {
    expressFileUpload,
    fsUnlinkFromDisk,
} = require("../../../helpers/fileUpload");

const updateDocumentService = async (req) => {

    const {id, title, description, estimateReadTime} = req.body;
    const files = req.files;


    const document = await Document.findByPk(id);

    if (!document) {
        return error(`Document with ID "${id}" not found. Cannot update a non-existent document.`);
    }

    const dbPayload = {
        title,
        description,
        estimateReadTime,
    };

    if (files?.file) {

        let {fileName, extension} = await expressFileUpload(files.file, 'file', 'documents');

        if (document.file) {
            fsUnlinkFromDisk(document.file, 'documents');
        }

        dbPayload.file = fileName + extension;
        dbPayload.fileSize = files.file.size;
    }

    document.set(dbPayload);
    await document.save();

    return success('Document updated successfully.', {updatedData: document});

};

module.exports = updateDocumentService;