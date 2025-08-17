const {error} = require('../../../helpers/response');
const {retrieveDashboardService} = require("../../../services/admin/dashboard");

const retrieveDashboardController = async (req, res) => {
    try {
        const response =  await retrieveDashboardService(req);
        res.status(200).json(response);
    } catch (e) {
        res.status(500).json(error('Something went wrong!', e.message))
    }
}

module.exports = retrieveDashboardController;