const {retrieveRouter} = require("../apiRouter");
const {wrapRequestHandler} = require("../../helpers/response");
const {retrieveDashboardController} = require("../../controllers/admin/dashboard");
const {adminAuthMiddleware} = require("../../middlewares");


retrieveRouter.get('/admin/dashboard', adminAuthMiddleware(), wrapRequestHandler(retrieveDashboardController));