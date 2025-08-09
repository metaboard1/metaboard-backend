const {success, error} = require('../../../helpers/response');
const {Article} = require('../../../models');
const {fsWriteFileToDisk, cloudFileUploader} = require("../../../helpers/fileUpload");
const imageOptimizer = require("../../../helpers/imageOptimizer");

const createArticleService = async (req) => {

    const {title, description, author, authorSocials, estimateReadTime} = req.body;
    const {coverImage} = req.files;

    const optimizedImage = await imageOptimizer(coverImage.data)

    const {fileName, extension} = await fsWriteFileToDisk(optimizedImage, '.webp', 'article', 'articles');

    const {secure_url: coverUrl} = await cloudFileUploader(fileName, extension, 'articles');


    const [article, isCreated] = await Article.findOrCreate({
        where: {title},
        defaults: {
            title,
            description,
            author,
            authorSocials,
            estimateReadTime,
            coverImage: fileName + extension,
            coverUrl,
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