const {success, error} = require('../../../helpers/response');
const {User} = require('../../../models');
const {expressFileUpload, fsUnlinkFromDisk} = require("../../../helpers/fileUpload");
const {generateBcrypt} = require("../../../helpers/bcrypt");

const updateUserService = async (req) => {

    const {id, name, email, password} = req.body;
    const files = req.files;

    const user = await User.findByPk(id);

    if (!user) {
        return error(`User with ID "${id}" not found. Cannot update a non-existent user.`);
    }

    const dbPayload = {
        name,
        email
    };

    if (password){
        dbPayload.password = generateBcrypt(password);
    }

    if (files?.avatar) {
        const {fileName, extension} = await expressFileUpload(files.avatar, 'user', 'users-avatar');
        fsUnlinkFromDisk(user.avatar, 'users-avatar');
        dbPayload.avatar = fileName + extension;
    }

    user.set(dbPayload);
    await user.save();

    return success('User updated successfully.', {updatedArticle: user});

};

module.exports = updateUserService;