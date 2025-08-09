const {success, error} = require('../../../helpers/response');
const {Publication} = require('../../../models');
const {fsWriteFileToDisk, cloudFileUploader, cloudUnlinkFile, fsUnlinkFromDisk} = require("../../../helpers/fileUpload");
const imageOptimizer = require("../../../helpers/imageOptimizer");

const updatePublicationService = async (req) => {

    const {id, title, subTitle, description, pages, price, isbn, publisher, publicationDate, storeLinks} = req.body;
    const files = req.files;

    let uploadedImage = {};
    let coverUrl = '';

    const publication = await Publication.findByPk(id);

    if (!publication) {
        return error(`Publication with ID "${id}" not found. Cannot update a non-existent publication.`);
    }

    if (files?.coverImage) {

        const optimizedImage = await imageOptimizer(files.coverImage.data);

        uploadedImage = await fsWriteFileToDisk(optimizedImage, '.webp', 'publication', 'publications');

        coverUrl = (await cloudFileUploader(uploadedImage.fileName, uploadedImage.extension, 'publications')).secure_url;

        if (publication.coverImage){
            fsUnlinkFromDisk(publication.coverImage, 'publications')
            cloudUnlinkFile('publications', publication.coverImage.split('.')[0]);
        }
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
        dbPayload.coverUrl = coverUrl;
    }

    publication.set(dbPayload);
    await publication.save();

    return success('Publication updated successfully.', {updatedData: publication});

};

module.exports = updatePublicationService;