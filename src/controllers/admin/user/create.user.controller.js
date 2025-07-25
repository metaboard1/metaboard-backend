const {error} = require('../../../helpers/response');
const {createUserService} = require("../../../services/admin/user");

const createUserController = async (req, res) => {
    try {
        const response =  await createUserService(req);
        res.status(201).json(response);
    } catch (e) {
        res.status(500).json(error('Something went wrong!', e.message))
    }
}

module.exports = createUserController;