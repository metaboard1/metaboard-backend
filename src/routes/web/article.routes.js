const {retrieveRouter} = require("../apiRouter");
const {wrapRequestHandler} = require("../../helpers/response");
const {validate} = require("../../helpers/validations");
const {retrieveArticleController, retrieveArticleByIdController} = require("../../controllers/web/article");
const {retrieveArticleByIdValidation} = require("../../validations/admin/article.validations");


retrieveRouter.get('/web/articles', wrapRequestHandler(retrieveArticleController));

retrieveRouter.get('/web/article-by-id', validate(retrieveArticleByIdValidation), wrapRequestHandler(retrieveArticleByIdController));


