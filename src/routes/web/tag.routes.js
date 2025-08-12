const {retrieveRouter} = require("../apiRouter");
const {wrapRequestHandler} = require("../../helpers/response");
const {retrieveTagsController} = require("../../controllers/web/tag");


retrieveRouter.get('/web/tags', wrapRequestHandler(retrieveTagsController));



