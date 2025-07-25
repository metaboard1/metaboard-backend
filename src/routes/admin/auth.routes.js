const {apiRouter} = require("../apiRouter");
const {validate} = require("../../helpers/validations");
const {loginValidation} = require("../../validations/admin/auth.validations");
const {wrapRequestHandler} = require("../../helpers/response");
const {loginController} = require("../../controllers/admin/auth");

apiRouter.post('/admin/login', validate(loginValidation), wrapRequestHandler(loginController));