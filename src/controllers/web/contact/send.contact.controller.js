const {error} = require('../../../helpers/response');
const {sendContactService} = require("../../../services/web/contact");

const sendContactController = async (req, res) => {
    try {
        const response = await sendContactService(req);
        res.status(200).json(response);
    } catch (e) {
        res.status(500).json(error('Something went wrong!', e.message))
    }
}

module.exports = sendContactController;