const path = require('path')
const fs = require('fs/promises');

const fileUpload = async (file, prefix, dir) => {
    const fileName = `${prefix}-${file.md5 + +new Date + 1}`;
    const extension = path.extname(file.name);
    await file.mv(`assets/uploads/${dir}/` + fileName + extension);
    return {fileName, extension};
}

const uploadOptimizedFile = async (buffer, ext, prefix, dir) => {
    const timestamp = Date.now();
    const fileName = `${prefix}-${timestamp}`;
    const fullPath = path.join(process.cwd(), `assets/uploads/${dir}`, fileName + ext);
    await fs.mkdir(path.dirname(fullPath), {recursive: true});
    await fs.writeFile(fullPath, buffer);
    return {fileName: fileName, extension: ext};
};
module.exports = {
    fileUpload,
    uploadOptimizedFile
}