const {success, error} = require('../../../helpers/response');
const {Article, Tag} = require('../../../models');
const {s3UploadFile} = require("../../../helpers/fileUpload");
const imageOptimizer = require("../../../helpers/imageOptimizer");

const createArticleService = async (req) => {

    const {title, description, author, authorSocials, estimateReadTime, tags} = req.body;
    const {coverImage} = req.files;
    const articleTags = tags.trim().split(',');

    const optimizedImage = await imageOptimizer(coverImage.data);

    const {fileName, extension} = await s3UploadFile(optimizedImage, 'articles', '.webp', 'image/webp');

    const coverUrl = `https://${process.env.AWS_S3_BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com/articles/${fileName}${extension}`;

    const [article, isCreated] = await Article.findOrCreate({
        where: {title},
        defaults: {
            title,
            description,
            author,
            authorSocials,
            estimateReadTime,
            coverImage: fileName + extension,
            tags: articleTags,
            coverUrl,
            isFeatured: false,
            isForMetaRule: false,
            isActive: false,
            publishedAt: new Date()
        }
    });

    await Tag.bulkCreate(articleTags.map((e) => ({name: e})), {
        ignoreDuplicates: true
    });

    if (!isCreated) {
        return error('Title is already exist.')
    }

    return success('Article created successfully.', {createdData: article});

};

module.exports = createArticleService;