const {createRouter, updateRouter, deleteRouter, retrieveRouter, patchRouter} = require("../apiRouter");
const {wrapRequestHandler} = require("../../helpers/response");
const {
    createDocumentController, retrieveDocumentController, updateDocumentController, deleteDocumentController,
    updateDocumentStatusController
} = require("../../controllers/admin/document");
const {validate} = require("../../helpers/validations");
const {validateFilesMiddleware, adminAuthMiddleware} = require("../../middlewares");
const {
    createDocumentValidation,
    updateDocumentValidation,
    deleteDocumentValidation,
    updateDocumentStatusValidation
} = require("../../validations/admin/document.validations");


retrieveRouter.get('/admin/documents', adminAuthMiddleware(), wrapRequestHandler(retrieveDocumentController));

createRouter.post('/admin/document', adminAuthMiddleware(), validate(createDocumentValidation), validateFilesMiddleware(['file'], [{
    fileTypes: ['application/pdf', 'application/vnd.ms-powerpoint', 'application/vnd.openxmlformats-officedocument.presentationml.presentation'],
    size: 5000
}]), wrapRequestHandler(createDocumentController));

updateRouter.put('/admin/document', adminAuthMiddleware(), validate(updateDocumentValidation), wrapRequestHandler(updateDocumentController));

patchRouter.patch('/admin/document-status', adminAuthMiddleware(), validate(updateDocumentStatusValidation), wrapRequestHandler(updateDocumentStatusController));

deleteRouter.delete('/admin/document', adminAuthMiddleware(), validate(deleteDocumentValidation), wrapRequestHandler(deleteDocumentController));