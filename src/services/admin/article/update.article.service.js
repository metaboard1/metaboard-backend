const {success, error} = require('../../../helpers/response');
const {Article} = require('../../../models');
const {expressFileUpload, fsWriteFileToDisk, cloudFileUploader, fsUnlinkFromDisk, cloudUnlinkFile} = require("../../../helpers/fileUpload");
const imageOptimizer = require("../../../helpers/imageOptimizer");

const updateArticleService = async (req) => {

    const {id, title, description, author, authorSocials, estimateReadTime} = req.body;
    const files = req.files;
    let uploadedImage = {};
    let coverUrl = '';


    const article = await Article.findByPk(id);

    if (!article) {
        return error(`Article with ID "${id}" not found. Cannot update a non-existent article.`);
    }

    if (files?.coverImage) {
        const optimizedImage = await imageOptimizer(files.coverImage.data);

        uploadedImage = await fsWriteFileToDisk(optimizedImage, '.webp', 'article', 'articles');

        coverUrl = (await cloudFileUploader(uploadedImage.fileName, uploadedImage.extension, 'articles')).secure_url;

        if (article.coverImage){
            fsUnlinkFromDisk(article.coverImage, 'articles')
            cloudUnlinkFile('articles', article.coverImage.split('.')[0]);
        }
    }

    const dbPayload = {
        title,
        description,
        author,
        authorSocials,
        estimateReadTime
    };

    if (files?.coverImage) {
        dbPayload.coverImage = uploadedImage.fileName + uploadedImage.extension;
        dbPayload.coverUrl = coverUrl;
    }

    article.set(dbPayload);
    await article.save();

    return success('Article updated successfully.', {updatedData: article});

};

module.exports = updateArticleService;