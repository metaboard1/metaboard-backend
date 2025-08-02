const {success, error} = require('../../../helpers/response');
const {Publication} = require('../../../models');
const {uploadOptimizedFile} = require("../../../helpers/fileUpload");
const sharp = require('sharp');


const createPublicationService = async (req) => {

    const {title, subTitle, description, pages, price, isbn, publisher, publicationDate, storeLinks} = req.body;

    const {coverImage} = req.files;

    const optimizedImage = await sharp(coverImage.data).webp({
        quality: 70,
        lossless: false,
    }).toBuffer();

    const {fileName, extension} = await uploadOptimizedFile(optimizedImage, '.webp', 'publication', 'publications');

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
            isActive: false,
        }
    });

    if (!isCreated) {
        return error('Publication already exist.')
    }

    return success('Publication created successfully.', {createdData: publication});

};

module.exports = createPublicationService;