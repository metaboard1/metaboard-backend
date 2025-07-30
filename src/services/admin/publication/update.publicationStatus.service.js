const {success, error} = require('../../../helpers/response');
const {Publication} = require('../../../models');

const updatePublicationStatusService = async (req) => {

    const {id} = req.body;

    const publication = await Publication.findByPk(id)

    if (!publication){
        return error(`Publication with ID "${id}" not found. Cannot update a non-existent publication.`);
    }

    publication.isActive = !publication.isActive;

    await publication.save();

    return success('Publication status updated successfully.', {updatedData: publication});

};

module.exports = updatePublicationStatusService;