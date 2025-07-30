const {error} = require('../../../helpers/response');
const {createPublicationService}  = require('../../../services/admin/publication');

const createPublicationController = async (req, res) => {
    try {
        const response =  await createPublicationService(req);
        res.status(201).json(response);
    } catch (e) {
        res.status(500).json(error('Something went wrong!', e.message))
    }
}

module.exports = createPublicationController;