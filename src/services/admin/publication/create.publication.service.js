const {success, error} = require('../../../helpers/response');
const {Publication} = require('../../../models');
const {s3UploadFile} = require("../../../helpers/fileUpload");
const imageOptimizer = require("../../../helpers/imageOptimizer");

const createPublicationService = async (req) => {

    const {title, description, authors, pages, price, isbn, publisher, publicationDate, storeLink} = req.body;

    const {coverImage} = req.files;

    const optimizedImage = await imageOptimizer(coverImage.data)

    const {fileName, extension} = await s3UploadFile(optimizedImage, 'publications', '.webp', 'image/webp');

    const coverUrl = `https://${process.env.AWS_S3_BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com/publications/${fileName}${extension}`;

    const [publication, isCreated] = await Publication.findOrCreate({
        where: {title, isbn},
        defaults: {
            title,
            description,
            authors,
            pages,
            price,
            isbn,
            publisher,
            publicationDate,
            storeLink,
            coverImage: fileName + extension,
            coverUrl,
            isActive: false,
        }
    });


    if (!isCreated) {
        return error('Publication already exist.')
    }

    return success('Publication created successfully.', {createdData: publication});

};

module.exports = createPublicationService;