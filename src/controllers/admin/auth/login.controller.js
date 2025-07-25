const {error} = require("../../../helpers/response");
const {loginService} = require("../../../services/admin/auth");


const loginUser = async (req, res) => {
    try {
       const response =  await loginService(req);
       res.status(200).json(response);
    } catch (e) {
        res.status(500).json(error('Something went wrong!', e.message))
    }
}

module.exports = loginUser;