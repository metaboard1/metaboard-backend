const {createRouter, updateRouter, retrieveRouter, patchRouter} = require("../apiRouter");
const {validate} = require("../../helpers/validations");

const {wrapRequestHandler} = require("../../helpers/response");

const {validateFilesMiddleware} = require("../../middlewares");
const {retrieveUsersController, createUserController, updateUserController, updateUserStatusController} = require("../../controllers/admin/user");
const {createUserValidation, updateUserValidation, updateUserStatusValidation} = require("../../validations/admin/user.validations");


retrieveRouter.get('/admin/users', wrapRequestHandler(retrieveUsersController));

createRouter.post('/admin/user', validate(createUserValidation), validateFilesMiddleware(['avatar'], [{
    fileTypes: ['image/jpeg', 'image/png', 'image/webp', 'image/gif'],
    size: 300
}]), wrapRequestHandler(createUserController));

updateRouter.put('/admin/user', validate(updateUserValidation), wrapRequestHandler(updateUserController));

patchRouter.patch('/admin/user-status', validate(updateUserStatusValidation), wrapRequestHandler(updateUserStatusController));

