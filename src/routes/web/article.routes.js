const {retrieveRouter} = require("../apiRouter");
const {wrapRequestHandler} = require("../../helpers/response");
const {validate} = require("../../helpers/validations");
const {retrieveArticleController, retrieveArticleDetailsController} = require("../../controllers/web/article");
const {retrieveArticleDetailsValidation} = require("../../validations/web/article.validations");


retrieveRouter.get('/web/articles', wrapRequestHandler(retrieveArticleController));

retrieveRouter.get('/web/article-details', validate(retrieveArticleDetailsValidation), wrapRequestHandler(retrieveArticleDetailsController));


