const {error} = require('../../../helpers/response');
const {deletePublicationService} = require("../../../services/admin/publication");

const deletePublicationController = async (req, res) => {
    try {
        const response = await deletePublicationService(req);
        res.status(200).json(response);
    } catch (e) {
        res.status(500).json(error('Something went wrong!', e.message))
    }
}

module.exports = deletePublicationController;