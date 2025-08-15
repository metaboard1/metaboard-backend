const {retrieveRouter} = require("../apiRouter");
const {wrapRequestHandler} = require("../../helpers/response");
const {retrieveDocumentsController} = require("../../controllers/web/document");


retrieveRouter.get('/web/metarule/documents', wrapRequestHandler(retrieveDocumentsController));



