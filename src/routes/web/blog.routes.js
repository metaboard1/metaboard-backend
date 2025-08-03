const {retrieveRouter} = require("../apiRouter");
const {wrapRequestHandler} = require("../../helpers/response");
const {validate} = require("../../helpers/validations");
const {retrieveBlogsController, retrieveBlogByIdController} = require("../../controllers/web/blog");
const {retrieveBlogByIdValidation} = require("../../validations/web/blog.validations");


retrieveRouter.get('/web/metarule/blogs', wrapRequestHandler(retrieveBlogsController));

retrieveRouter.get('/web/metarule/blog-by-id', validate(retrieveBlogByIdValidation), wrapRequestHandler(retrieveBlogByIdController));