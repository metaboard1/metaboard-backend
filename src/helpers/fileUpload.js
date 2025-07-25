const path = require('path')

const fileUpload = async (file, prefix, dir) => {
    const fileName = `${prefix}-${file.md5 + +new Date + 1}`;
    const extension = path.extname(file.name);
    await file.mv(`assets/uploads/${dir}/` + fileName + extension);
    return {fileName, extension};
}
module.exports = {
    fileUpload
}