const {success, error} = require('../../../helpers/response');
const {Article, Tag} = require('../../../models');
const {
    s3UploadFile, s3DeleteFile
} = require("../../../helpers/fileUpload");
const imageOptimizer = require("../../../helpers/imageOptimizer");

const updateArticleService = async (req) => {

    const {id, title, description, author, authorSocials, estimateReadTime, tags} = req.body;
    const files = req.files;
    let uploadedImage = {};
    let coverUrl = '';
    const articleTags = tags.trim().split(',');

    const article = await Article.findByPk(id);

    if (!article) {
        return error(`Article with ID "${id}" not found. Cannot update a non-existent article.`);
    }

    if (files?.coverImage) {
        const optimizedImage = await imageOptimizer(files.coverImage.data);

        uploadedImage = await s3UploadFile(optimizedImage, 'articles', '.webp', 'image/webp');

        coverUrl = `https://${process.env.AWS_S3_BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com/articles/${uploadedImage.fileName}${uploadedImage.extension}`;

        if (article.coverImage) {
            s3DeleteFile(`articles/${article.coverImage}`);
        }
    }

    const dbPayload = {
        title,
        description,
        author,
        authorSocials,
        estimateReadTime,
        tags: articleTags
    };

    if (files?.coverImage) {
        dbPayload.coverImage = uploadedImage.fileName + uploadedImage.extension;
        dbPayload.coverUrl = coverUrl;
    }

    article.set(dbPayload);
    await article.save();

    await Tag.bulkCreate(articleTags.map((e) => ({name: e})), {
        ignoreDuplicates: true
    });

    return success('Article updated successfully.', {updatedData: article});

};

module.exports = updateArticleService;