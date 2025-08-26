const {success, error} = require('../../../helpers/response');
const {Document} = require('../../../models');
const {s3UploadFile} = require("../../../helpers/fileUpload");

const createDocumentService = async (req) => {

    const {title, description, estimateReadTime} = req.body;
    const {file} = req.files;


    const {fileName, extension} = await s3UploadFile(file.data, 'documents', `.${file.name.split('.')[1]}`, file.mimetype);

    const fileUrl = `https://${process.env.AWS_S3_BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com/documents/${fileName}${extension}`;

    const [document, isCreated] = await Document.findOrCreate({
        where: {title},
        defaults: {
            title,
            description,
            estimateReadTime,
            file: fileName + extension,
            fileUrl,
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