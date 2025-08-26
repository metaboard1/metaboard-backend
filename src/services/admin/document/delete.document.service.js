const {success, error} = require('../../../helpers/response');
const {Document} = require('../../../models');
const {fsUnlinkFromDisk, s3DeleteFile} = require("../../../helpers/fileUpload");

const deleteDocumentService = async (req) => {

    const {id} = req.body;

    const document = await Document.findByPk(id);

    if (!document) {
        return error(`Document with ID ${id} not found. Cannot delete a non-existent document.`);
    }

    const isDeleted = await document.destroy({
        where: {id}
    });

    if (isDeleted && document.file) {
        s3DeleteFile(`documents/${document.file}`);
    }

    return success('Document deleted successfully.', {deletedData: id});
};

module.exports = deleteDocumentService;