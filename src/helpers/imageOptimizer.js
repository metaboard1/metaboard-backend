const sharp = require("sharp");


const imageOptimizer = async (file, resizeOptions = {}, conversionOptions = {}) => {
    return await sharp(file).resize({
        width: 400,
        height: 240,
        fit: "cover",
        ...resizeOptions
    }).webp({
        quality: 35,
        lossless: false,
        smartSubsample: true,
        ...conversionOptions
    }).toBuffer();
}

module.exports = imageOptimizer;