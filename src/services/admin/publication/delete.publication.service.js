const {success, error} = require('../../../helpers/response');
const {Publication} = require('../../../models');
const fs = require("node:fs");
const path = require("node:path");

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
        await fs.unlinkSync(path.join(process.cwd(), 'assets', 'uploads', 'publications', publication.coverImage))
    }
    return success('Publication deleted successfully.', {deletedData: id});
};

module.exports = deletePublicationService;