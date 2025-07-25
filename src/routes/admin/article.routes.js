const {createRouter, updateRouter, deleteRouter, retrieveRouter, patchRouter} = require("../apiRouter");
const {validate} = require("../../helpers/validations");
const {createArticleValidation, updateArticleValidation, updateArticleContentValidation, deleteArticleValidation,
    updateArticleStatusValidation, retrieveArticleByIdValidation, updateArticleFeaturedValidation
} = require("../../validations/admin/article.validations");
const {wrapRequestHandler} = require("../../helpers/response");
const {createArticleController, updateArticleController, updateArticleContentController, deleteArticleController,
    updateArticleStatusController, retrieveArticleController, retrieveArticleByIdController,
    updateArticleFeaturedController
} = require("../../controllers/admin/article");
const {validateFilesMiddleware} = require("../../middlewares");




retrieveRouter.get('/admin/articles', wrapRequestHandler(retrieveArticleController));

retrieveRouter.get('/admin/article-by-id', validate(retrieveArticleByIdValidation), wrapRequestHandler(retrieveArticleByIdController));

createRouter.post('/admin/article', validate(createArticleValidation),  validateFilesMiddleware(['coverImage'], [{
    fileTypes: ['image/jpeg', 'image/png', 'image/webp', 'image/gif'],
    size: 300
}]),  wrapRequestHandler(createArticleController));

updateRouter.put('/admin/article', validate(updateArticleValidation), wrapRequestHandler(updateArticleController));

updateRouter.put('/admin/article-content', validate(updateArticleContentValidation), wrapRequestHandler(updateArticleContentController));

patchRouter.patch('/admin/article-set-featured',  validate(updateArticleFeaturedValidation), wrapRequestHandler(updateArticleFeaturedController));

patchRouter.patch('/admin/article-status', validate(updateArticleStatusValidation), wrapRequestHandler(updateArticleStatusController));

deleteRouter.delete('/admin/article', validate(deleteArticleValidation), wrapRequestHandler(deleteArticleController));