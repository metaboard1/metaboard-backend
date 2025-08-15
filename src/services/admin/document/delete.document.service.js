const {success, error} = require('../../../helpers/response');
const {Document} = require('../../../models');
const {fsUnlinkFromDisk} = require("../../../helpers/fileUpload");

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
        fsUnlinkFromDisk(document.file, 'documents');
    }

    return success('Document deleted successfully.', {deletedData: id});
};

module.exports = deleteDocumentService;