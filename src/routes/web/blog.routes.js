const {retrieveRouter} = require("../apiRouter");
const {wrapRequestHandler} = require("../../helpers/response");
const {validate} = require("../../helpers/validations");
const {
    retrieveBlogsController,
    retrieveBlogDetailsController
} = require("../../controllers/web/blog");
const {retrieveBlogDetailsValidation} = require("../../validations/web/blog.validations");


retrieveRouter.get('/web/metarule/blogs', wrapRequestHandler(retrieveBlogsController));

retrieveRouter.get('/web/metarule/blog-details', validate(retrieveBlogDetailsValidation), wrapRequestHandler(retrieveBlogDetailsController));