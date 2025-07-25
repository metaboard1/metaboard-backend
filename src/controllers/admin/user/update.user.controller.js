const {error} = require('../../../helpers/response');
const {updateUserService} = require("../../../services/admin/user");

const updateUserController = async (req, res) => {
    try {
        const response =  await updateUserService(req);
        res.status(200).json(response);
    } catch (e) {
        res.status(500).json(error('Something went wrong!', e.message))
    }
}

module.exports = updateUserController;