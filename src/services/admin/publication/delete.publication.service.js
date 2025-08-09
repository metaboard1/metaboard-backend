const {success, error} = require('../../../helpers/response');
const {Publication} = require('../../../models');
const {fsUnlinkFromDisk, cloudUnlinkFile} = require("../../../helpers/fileUpload");

const deletePublicationService = async (req) => {

    const {id} = req.body;

    const publication = await Publication.findByPk(id);

    if (!publication) {
        return error(`Publication with ID ${id} not found. Cannot delete a non-existent publication.`);
    }

    const isDeleted = await Publication.destroy({
        where: {id}
    });

    if (isDeleted && publication.coverImage) {
        fsUnlinkFromDisk(publication.coverImage);
        cloudUnlinkFile('publications', publication.coverImage.split('.')[0]);
    }
    return success('Publication deleted successfully.', {deletedData: id});
};

module.exports = deletePublicationService;