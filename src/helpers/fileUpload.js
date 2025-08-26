const path = require('path')
const fs = require('fs/promises');
const {v2: cloudinary} = require('cloudinary');
const {PutObjectCommand, DeleteObjectCommand} = require("@aws-sdk/client-s3");


const expressFileUpload = async (file, prefix, dir) => {
    const fileName = `${prefix}-${file.md5 + +new Date + 1}`;
    const extension = path.extname(file.name);
    const fullPath = path.join(process.cwd(), `assets/uploads/${dir}`, fileName + extension);
    await fs.mkdir(path.dirname(fullPath), {recursive: true});
    await file.mv(fullPath);
    return {fileName, extension};
}

const fsWriteFileToDisk = async (buffer, ext, prefix, dir) => {
    const timestamp = Date.now();
    const fileName = `${prefix}-${timestamp}`;
    const fullPath = path.join(process.cwd(), `assets/uploads/${dir}`, fileName + ext);
    await fs.mkdir(path.dirname(fullPath), {recursive: true});
    await fs.writeFile(fullPath, buffer);
    return {fileName: fileName, extension: ext};
};

const cloudFileUploader = async (fileName, fileExtension, folder, options = {}) => {
    return await cloudinary.uploader.upload(path.join(process.cwd(), `assets/uploads/${folder}/`, fileName + fileExtension), {
        public_id: fileName,
        folder: folder,
        resource_type: 'image',
        ...options
    });
}

const cloudUnlinkFile = async (path, fileName) => {
    await cloudinary.uploader.destroy(`${path}/${fileName}`)
}

const fsUnlinkFromDisk = async (file, ...rest) => {
    await fs.unlink(path.join(process.cwd(), 'assets', 'uploads', ...rest, file))
}


const s3UploadFile = async (buffer, dir, ext, mimeType) => {
    const timestamp = Date.now();
    const fileName = `${dir.slice(0, -1)}-${timestamp}`;
    const params = {
        Bucket: process.env.AWS_S3_BUCKET,
        Key: `${dir}/${fileName}${ext}`,
        Body: buffer,
        ContentLength: buffer.length,
        ContentType: mimeType,
    };
    const command = new PutObjectCommand(params);
    await global.s3Client.send(command);
    return {fileName: fileName, extension: ext};
}

const s3DeleteFile = async (path) => {
    const command = new DeleteObjectCommand({
        Bucket: process.env.AWS_S3_BUCKET,
        Key: path,
    });
    await global.s3Client.send(command);
}

module.exports = {
    expressFileUpload,
    fsWriteFileToDisk,
    cloudFileUploader,
    cloudUnlinkFile,
    fsUnlinkFromDisk,
    s3UploadFile,
    s3DeleteFile
}