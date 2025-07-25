const {error} = require('../../../helpers/response');
const {retrieveUsersService} = require('../../../services/admin/user');

const retrieveUsersController = async (req, res) => {
    try {
        const response = await retrieveUsersService(req);
        res.status(200).json(response);
    } catch (e) {
        res.status(500).json(error('Something went wrong!', e.message))
    }
}

module.exports = retrieveUsersController;