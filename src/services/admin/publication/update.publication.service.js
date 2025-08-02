const {success, error} = require('../../../helpers/response');
const {Publication} = require('../../../models');
const {uploadOptimizedFile} = require("../../../helpers/fileUpload");
const sharp = require("sharp");

const updatePublicationService = async (req) => {

    const {id, title, subTitle, description, pages, price, isbn, publisher, publicationDate, storeLinks} = req.body;
    const files = req.files;

    let uploadedImage = {};

    const publication = await Publication.findByPk(id);

    if (!publication) {
        return error(`Publication with ID "${id}" not found. Cannot update a non-existent publication.`);
    }

    if (files?.coverImage) {
        const optimizedImage = await sharp(files.coverImage.data).webp({
            quality: 70,
            lossless: false,
        }).toBuffer();
        uploadedImage = await uploadOptimizedFile(optimizedImage, '.webp', 'publication', 'publications');
    }

    const dbPayload = {
        title,
        subTitle,
        description,
        pages,
        price,
        isbn,
        publisher,
        publicationDate,
        storeLinks
    };

    if (files?.coverImage) {
        dbPayload.coverImage = uploadedImage.fileName + uploadedImage.extension;
    }

    publication.set(dbPayload);
    await publication.save();

    return success('Publication updated successfully.', {updatedData: publication});

};

module.exports = updatePublicationService;