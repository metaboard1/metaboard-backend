const {createRouter, retrieveRouter, patchRouter, updateRouter, deleteRouter} = require("../apiRouter");
const {validate} = require("../../helpers/validations");
const {
    createPublicationValidation, updatePublicationStatusValidation, updatePublicationValidation,
    deletePublicationValidation
} = require("../../validations/admin/publication.validations");
const {wrapRequestHandler} = require("../../helpers/response");
const {
    createPublicationController, retrievePublicationController, updatePublicationStatusController,
    updatePublicationController, deletePublicationController
} = require("../../controllers/admin/publication");
const {validateFilesMiddleware, adminAuthMiddleware} = require("../../middlewares");


retrieveRouter.get('/admin/metarule/publications', adminAuthMiddleware(), wrapRequestHandler(retrievePublicationController));

createRouter.post('/admin/metarule/publication', adminAuthMiddleware(), validate(createPublicationValidation), validateFilesMiddleware(['coverImage'], [{
    fileTypes: ['image/jpeg', 'image/png', 'image/webp'],
    size: 300
}]), wrapRequestHandler(createPublicationController));

updateRouter.put('/admin/metarule/publication', adminAuthMiddleware(), validate(updatePublicationValidation), wrapRequestHandler(updatePublicationController));

patchRouter.patch('/admin/metarule/publication-status', adminAuthMiddleware(), validate(updatePublicationStatusValidation), wrapRequestHandler(updatePublicationStatusController));

deleteRouter.delete('/admin/metarule/publication', adminAuthMiddleware(), validate(deletePublicationValidation), wrapRequestHandler(deletePublicationController));
