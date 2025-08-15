const {success, error} = require('../../../helpers/response');
const {Document} = require('../../../models');
const {expressFileUpload} = require("../../../helpers/fileUpload");

const createDocumentService = async (req) => {

    const {title, description, estimateReadTime} = req.body;
    const {file} = req.files;

    // const optimizedImage = await imageOptimizer(coverImage.data)

    const {fileName, extension} = await expressFileUpload(file, 'file', 'documents');

    // const {secure_url: coverUrl} = await cloudFileUploader(fileName, extension, 'articles');

    const [document, isCreated] = await Document.findOrCreate({
        where: {title},
        defaults: {
            title,
            description,
            estimateReadTime,
            file: fileName + extension,
            fileSize: file.size,
            isActive: false,
        }
    });

    if (!isCreated) {
        return error('Document is already exist.')
    }

    return success('Document created successfully.', {createdData: document});

};

module.exports = createDocumentService;