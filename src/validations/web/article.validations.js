const {query} = require("express-validator");


const retrieveArticleByIdValidation = [
    query("id").notEmpty().withMessage("ID is required.").bail().isInt({min: 1}).withMessage("ID must be a positive integer."),
];


module.exports = {
    retrieveArticleByIdValidation,

};