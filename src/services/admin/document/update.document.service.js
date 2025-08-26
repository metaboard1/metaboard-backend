const {success, error} = require('../../../helpers/response');
const {Document} = require('../../../models');
const {
     s3UploadFile, s3DeleteFile,
} = require("../../../helpers/fileUpload");

const updateDocumentService = async (req) => {

    const {id, title, description, estimateReadTime} = req.body;
    const files = req.files;


    const document = await Document.findByPk(id);

    if (!document) {
        return error(`Document with ID "${id}" not found. Cannot update a non-existent document.`);
    }

    const dbPayload = {
        title,
        description,
        estimateReadTime,
    };

    if (files?.file) {

        let {fileName,extension} = await s3UploadFile(files.file.data, 'documents', `.${files.file.name.split('.')[1]}`, files.file.mimetype);

        const fileUrl = `https://${process.env.AWS_S3_BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com/documents/${fileName}${extension}`;

        if (document.file) {
            s3DeleteFile(`documents/${document.file}`);
        }

        dbPayload.file = fileName + extension;
        dbPayload.fileUrl = fileUrl;
        dbPayload.fileSize = files.file.size;
    }

    document.set(dbPayload);
    await document.save();

    return success('Document updated successfully.', {updatedData: document});

};

module.exports = updateDocumentService;