const {wrapRequestHandler} = require("../helpers/response");
const {apiRouter} = require("./apiRouter");
const sharp = require("sharp");
const {uploadOptimizedFile, fsWriteFileToDisk} = require("../helpers/fileUpload");
const {v2: cloudinary} = require('cloudinary');
const path = require("node:path");
const imageOptimizer = require("../helpers/imageOptimizer");


const test = async (req, res) => {



    const optimizedImage = await imageOptimizer(req.files.img.data)
    console.log(optimizedImage)

    // const optimizedImage = await sharp(req.files.img.data).resize({
    //     width: 400,
    //     height: 240,
    //     fit: "cover"
    // }).webp({
    //     quality: 35,
    //     lossless: false,
    //     smartSubsample: true,
    // }).toBuffer();

    const {fileName, extension} = await fsWriteFileToDisk(optimizedImage, '.webp', 'test', 'test');

    console.log(path.join(process.cwd(), `assets/uploads/test/`, fileName + extension))

    // const uploadResult = await cloudinary.uploader.upload(path.join(process.cwd(), `assets/uploads/test/`, fileName + extension), {
    //     public_id: 'image',
    //     folder:'publications',
    //     resource_type: 'image',
    //
    // }).catch((error) => {
    //         console.log(error);
    //     });
    //
    res.send(true)
}


apiRouter.post('/web/test', wrapRequestHandler(test));
