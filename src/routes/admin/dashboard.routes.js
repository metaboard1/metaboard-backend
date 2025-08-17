const {retrieveRouter} = require("../apiRouter");
const {wrapRequestHandler} = require("../../helpers/response");
const {retrieveDashboardController} = require("../../controllers/admin/dashboard");


retrieveRouter.get('/admin/dashboard', wrapRequestHandler(retrieveDashboardController));