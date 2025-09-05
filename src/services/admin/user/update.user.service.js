const {success, error} = require('../../../helpers/response');
const {User} = require('../../../models');
const {s3UploadFile, s3DeleteFile} = require("../../../helpers/fileUpload");
const {generateBcrypt} = require("../../../helpers/bcrypt");
const imageOptimizer = require("../../../helpers/imageOptimizer");

const updateUserService = async (req) => {

    const {id, name, email, password} = req.body;
    const files = req.files;
    const tokenData = req.response;

    if (tokenData.role === 'manager') {
        return error('You do not have permission to access this resource.');
    }

    const user = await User.findByPk(id);

    if (!user) {
        return error(`User with ID "${id}" not found. Cannot update a non-existent user.`);
    }

    const dbPayload = {
        name,
        email
    };

    if (password) {
        dbPayload.password = generateBcrypt(password);
    }

    if (files?.avatar) {

        const optimizedImage = await imageOptimizer(files.avatar.data);

        const {fileName, extension} = await s3UploadFile(optimizedImage, 'users', '.webp', 'image/webp');

        const avatarUrl = `https://${process.env.AWS_S3_BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com/users/${fileName}${extension}`;

        s3DeleteFile(`articles/${user.avatar}`);

        dbPayload.avatar = fileName + extension;
        dbPayload.avatarUrl = avatarUrl;
    }

    user.set(dbPayload);
    await user.save();

    return success('User updated successfully.', {updatedArticle: user});

};

module.exports = updateUserService;