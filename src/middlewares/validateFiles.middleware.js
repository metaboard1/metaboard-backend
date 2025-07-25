const {error} = require("../helpers/response");


const validateFiles = (fileKeys = [], options = []) => {
    return (req, res, next) => {
        // console.log(req?.files);

        let errorObj = {
            "type": "field",
            "msg": "",
            "path": "",
            "location": "body"
        };

        const isValid = fileKeys.every((e, i) => {

            const file = req?.files?.[e];
            const validateSize = options[i].size * 1024;
            const isValidFileType = options[i].fileTypes.some((e) => e === file?.mimetype);

            if (!file || typeof file !== 'object' || !file?.name || !file.mimetype || !file?.data || !isValidFileType || (validateSize && file.size > validateSize)) {
                errorObj.msg = `Please upload an ${options.fileTypes} file smaller than ${options[i].size} KB.`;
                errorObj.path = e;
                return false;
            }
            return true;
        });

        if (isValid) {
            return next();
        } else {
            res.status(400).json(error('Invalid or missing file', [errorObj]));
        }
    }
}

module.exports = validateFiles;