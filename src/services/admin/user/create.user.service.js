const {success, error} = require('../../../helpers/response');
const {User} = require('../../../models');
const {expressFileUpload, s3UploadFile} = require("../../../helpers/fileUpload");
const {generateBcrypt} = require("../../../helpers/bcrypt");
const imageOptimizer = require("../../../helpers/imageOptimizer");

const createUserService = async (req) => {

    const {name, email, password} = req.body;
    const {avatar} = req.files;

    // const {fileName, extension} = await expressFileUpload(avatar, 'user', 'users-avatar');

    const optimizedImage = await imageOptimizer(avatar.data);

    const {fileName, extension} = await s3UploadFile(optimizedImage, 'users', '.webp', 'image/webp');

    const avatarUrl = `https://${process.env.AWS_S3_BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com/users/${fileName}${extension}`;

    let [user, isCreated] = await User.findOrCreate({
        where: {email},
        defaults: {
            name,
            email,
            password: generateBcrypt(password),
            avatar: fileName + extension,
            avatarUrl,
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