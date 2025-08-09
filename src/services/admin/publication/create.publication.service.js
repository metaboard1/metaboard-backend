const {success, error} = require('../../../helpers/response');
const {Publication} = require('../../../models');
const {fsWriteFileToDisk, cloudFileUploader} = require("../../../helpers/fileUpload");
const imageOptimizer = require("../../../helpers/imageOptimizer");

const createPublicationService = async (req) => {

    const {title, subTitle, description, pages, price, isbn, publisher, publicationDate, storeLinks} = req.body;

    const {coverImage} = req.files;

    const optimizedImage = await imageOptimizer(coverImage.data)

    const {fileName, extension} = await fsWriteFileToDisk(optimizedImage, '.webp', 'publication', 'publications');

    const {secure_url: coverUrl} = await cloudFileUploader(fileName, extension, 'publications');



    const [publication, isCreated] = await Publication.findOrCreate({
        where: {title, isbn},
        defaults: {
            title,
            subTitle,
            description,
            pages,
            price,
            isbn,
            publisher,
            publicationDate,
            storeLinks,
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