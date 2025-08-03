const {error} = require('../../../helpers/response');
const {retrieveBlogsService} = require("../../../services/web/blog");

const retrieveBlogsController = async (req, res) => {
    try {
        const response =  await retrieveBlogsService(req);
        res.status(200).json(response);
    } catch (e) {
        res.status(500).json(error('Something went wrong!', e.message))
    }
}

module.exports = retrieveBlogsController;