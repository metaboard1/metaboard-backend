const {createRouter, updateRouter, deleteRouter, retrieveRouter, patchRouter} = require("../apiRouter");
const {validate} = require("../../helpers/validations");
const {
    createArticleValidation, updateArticleValidation, updateArticleContentValidation, deleteArticleValidation,
    updateArticleStatusValidation, retrieveArticleByIdValidation, updateArticleFeaturedValidation,
    updateArticleTransferValidation
} = require("../../validations/admin/article.validations");
const {wrapRequestHandler} = require("../../helpers/response");
const {
    createArticleController, updateArticleController, updateArticleContentController, deleteArticleController,
    updateArticleStatusController, retrieveArticleController, retrieveArticleByIdController,
    updateArticleFeaturedController, updateArticleTransferController
} = require("../../controllers/admin/article");
const {validateFilesMiddleware, adminAuthMiddleware} = require("../../middlewares");


retrieveRouter.get('/admin/articles', adminAuthMiddleware(), wrapRequestHandler(retrieveArticleController));

retrieveRouter.get('/admin/article-by-id', adminAuthMiddleware(), validate(retrieveArticleByIdValidation), wrapRequestHandler(retrieveArticleByIdController));

createRouter.post('/admin/article', adminAuthMiddleware(), validate(createArticleValidation), validateFilesMiddleware(['coverImage'], [{
    fileTypes: ['image/jpeg', 'image/png', 'image/webp', 'image/gif'],
    size: 300
}]), wrapRequestHandler(createArticleController));

updateRouter.put('/admin/article', adminAuthMiddleware(), validate(updateArticleValidation), wrapRequestHandler(updateArticleController));

updateRouter.put('/admin/article-content', adminAuthMiddleware(), validate(updateArticleContentValidation), wrapRequestHandler(updateArticleContentController));

patchRouter.patch('/admin/article-set-featured', adminAuthMiddleware(), validate(updateArticleFeaturedValidation), wrapRequestHandler(updateArticleFeaturedController));

patchRouter.patch('/admin/article-transfer', adminAuthMiddleware(), validate(updateArticleTransferValidation), wrapRequestHandler(updateArticleTransferController));

patchRouter.patch('/admin/article-status', adminAuthMiddleware(), validate(updateArticleStatusValidation), wrapRequestHandler(updateArticleStatusController));

deleteRouter.delete('/admin/article', adminAuthMiddleware(), validate(deleteArticleValidation), wrapRequestHandler(deleteArticleController));