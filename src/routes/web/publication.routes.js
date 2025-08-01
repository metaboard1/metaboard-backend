const {retrieveRouter} = require("../apiRouter");
const {wrapRequestHandler} = require("../../helpers/response");
const {retrievePublicationsController} = require("../../controllers/web/publication");


retrieveRouter.get('/web/publications', wrapRequestHandler(retrievePublicationsController));



