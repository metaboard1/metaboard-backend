const {error} = require('../../../helpers/response');
const {updateUserStatusService} = require("../../../services/admin/user");

const updateUserStatusController = async (req, res) => {
    try {
        const response =  await updateUserStatusService(req);
        res.status(200).json(response);
    } catch (e) {
        res.status(500).json(error('Something went wrong!', e.message))
    }
}

module.exports = updateUserStatusController;