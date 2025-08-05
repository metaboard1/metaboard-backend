const {apiRouter} = require("../apiRouter");
const {wrapRequestHandler} = require("../../helpers/response");
const {sendContactController} = require("../../controllers/web/contact");
const {validate} = require("../../helpers/validations");
const {sendContactValidation} = require("../../validations/web/contact.validations");


apiRouter.post('/web/contact/send', validate(sendContactValidation), wrapRequestHandler(sendContactController));

