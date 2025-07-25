const {success, error} = require('../../../helpers/response');
const {User} = require('../../../models');

const updateUserStatusService = async (req) => {

    const {id} = req.body;

    const user = await User.findByPk(id)

    if (!user){
        return error(`User with ID "${id}" not found. Cannot update a non-existent user.`);
    }

    user.isActive = !user.isActive;

    await user.save();

    return success('User status updated successfully.', {updatedData: user});

};

module.exports = updateUserStatusService;