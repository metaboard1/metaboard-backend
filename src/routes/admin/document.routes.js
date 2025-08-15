const {createRouter, updateRouter, deleteRouter, retrieveRouter, patchRouter} = require("../apiRouter");
const {wrapRequestHandler} = require("../../helpers/response");
const {createDocumentController, retrieveDocumentController, updateDocumentController, deleteDocumentController,
    updateDocumentStatusController
} = require("../../controllers/admin/document");
const {validate} = require("../../helpers/validations");
const {validateFilesMiddleware} = require("../../middlewares");
const {createDocumentValidation, updateDocumentValidation, deleteDocumentValidation, updateDocumentStatusValidation} = require("../../validations/admin/document.validations");



retrieveRouter.get('/admin/documents', wrapRequestHandler(retrieveDocumentController));

createRouter.post('/admin/document', validate(createDocumentValidation),  validateFilesMiddleware(['file'], [{
    fileTypes: ['application/pdf', 'application/vnd.ms-powerpoint', 'application/vnd.openxmlformats-officedocument.presentationml.presentation'],
    size: 300
}]),  wrapRequestHandler(createDocumentController));

updateRouter.put('/admin/document', validate(updateDocumentValidation), wrapRequestHandler(updateDocumentController));

patchRouter.patch('/admin/document-status', validate(updateDocumentStatusValidation), wrapRequestHandler(updateDocumentStatusController));

deleteRouter.delete('/admin/document', validate(deleteDocumentValidation), wrapRequestHandler(deleteDocumentController));