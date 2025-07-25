const {success, error} = require('../../../helpers/response');
const {Article} = require('../../../models');
const {fileUpload} = require("../../../helpers/fileUpload");

const createArticleService = async (req) => {

    const {title, description, author, authorSocials, estimateReadTime} = req.body;
    const {coverImage} = req.files;

    const {fileName, extension} = await fileUpload(coverImage, 'cover', 'article-cover-images');

    const [article, isCreated] = await Article.findOrCreate({
        where: {title},
        defaults: {
            title,
            description,
            author,
            authorSocials,
            estimateReadTime,
            coverImage: fileName + extension,
            isFeatured: false,
            isActive: false,
            publishedAt: new Date()
        }
    });

    if (!isCreated) {
        return error('Title is already exist.')
    }

    return success('Article created successfully.', {createdData: article});

};

module.exports = createArticleService;