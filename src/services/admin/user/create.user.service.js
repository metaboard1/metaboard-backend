const {success, error} = require('../../../helpers/response');
const {User} = require('../../../models');
const {fileUpload} = require("../../../helpers/fileUpload");
const {generateBcrypt} = require("../../../helpers/bcrypt");

const createUserService = async (req) => {

    const {name, email, password} = req.body;
    const {avatar} = req.files;

    const {fileName, extension} = await fileUpload(avatar, 'user', 'users-avatar');



    let [user, isCreated] = await User.findOrCreate({
        where: {email},
        defaults: {
            name,
            email,
            password: generateBcrypt(password),
            avatar: fileName + extension,
            isActive: false,
        }
    });

    if (!isCreated) {
        return error('Email already in use.')
    }

    user = user.get({plain: true});

    delete user.password;

    return success('User created successfully.', {createdData: user});

};

module.exports = createUserService;