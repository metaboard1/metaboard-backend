const {success, error} = require('../../../helpers/response');
const {Article} = require('../../../models');
const {fileUpload} = require("../../../helpers/fileUpload");

const updateArticleService = async (req) => {

    const {id, title, description, author, authorSocials, estimateReadTime} = req.body;
    const files = req.files;
    let uploadedImage = {};


    const article = await Article.findByPk(id);

    if (!article) {
        return error(`Article with ID "${id}" not found. Cannot update a non-existent article.`);
    }

    if (files?.coverImage) {
        uploadedImage = await fileUpload(files.coverImage, 'cover', 'article-cover-images');
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
    }


    article.set(dbPayload);
    await article.save();

    return success('Article updated successfully.', {updatedData: article});

};

module.exports = updateArticleService;