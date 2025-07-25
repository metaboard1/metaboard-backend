const {body, query} = require("express-validator");


const retrieveArticleByIdValidation = [
    query("id").notEmpty().withMessage("ID is required.").bail().isInt({min: 1}).withMessage("ID must be a positive integer."),
];

const createArticleValidation = [
    body('title').notEmpty().withMessage('Title is required').bail().isString().withMessage('Title must be a string'),
    body('description').notEmpty().withMessage('Description is required').bail().isString().withMessage('Description must be a string'),
    body('author').notEmpty().withMessage('Author is required').bail().isString().withMessage('Author must be a string'),
    body('estimateReadTime').notEmpty().withMessage('Estimate read time is required').bail().isInt({min: 1}).withMessage('Estimate read time must be a positive integer.'),
    // body('coverImage').notEmpty().withMessage('Estimate read time is required').bail().isString().withMessage('Estimate read time must be a string'),
    body('authorSocials').optional().isJSON().withMessage('Author socials must be valid JSON').customSanitizer((value) =>JSON.parse(value)),
    body('authorSocials.twitter').optional().isString().withMessage('Twitter handle must be a string'),
    body('authorSocials.facebook').optional().isString().withMessage('Facebook profile must be a string'),
    body('authorSocials.linkedin').optional().isString().withMessage('LinkedIn profile must be a string'),
];

const updateArticleValidation = [
    body("id").notEmpty().withMessage("ID is required.").bail().isInt({min: 1}).withMessage("ID must be a positive integer."),
    ...createArticleValidation
];

const updateArticleContentValidation = [
    body("id").notEmpty().withMessage("ID is required.").bail().isInt({min: 1}).withMessage("ID must be a positive integer."),
    body("html").notEmpty().withMessage("Content html is required."),
];

const updateArticleFeaturedValidation = [
    body("id").notEmpty().withMessage("ID is required.").bail().isInt({min: 1}).withMessage("ID must be a positive integer."),
];

const updateArticleStatusValidation = [
    body("id").notEmpty().withMessage("ID is required.").bail().isInt({min: 1}).withMessage("ID must be a positive integer."),
];

const deleteArticleValidation = [
    body("id").notEmpty().withMessage("ID is required.").bail().isInt({min: 1}).withMessage("ID must be a positive integer."),
];

module.exports = {
    retrieveArticleByIdValidation,
    createArticleValidation,
    updateArticleValidation,
    updateArticleContentValidation,
    updateArticleFeaturedValidation,
    updateArticleStatusValidation,
    deleteArticleValidation
};