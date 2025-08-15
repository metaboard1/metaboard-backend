const {body, query} = require("express-validator");


const retrieveDocumentByIdValidation = [
    query("id").notEmpty().withMessage("ID is required.").bail().isInt({min: 1}).withMessage("ID must be a positive integer."),
];

const createDocumentValidation = [
    body('title').notEmpty().withMessage('Title is required').bail().isString().withMessage('Title must be a string'),
    body('description').notEmpty().withMessage('Description is required').bail().isString().withMessage('Description must be a string'),
    body('estimateReadTime').notEmpty().withMessage('Estimate read time is required').bail().isInt({min: 1}).withMessage('Estimate read time must be a positive integer.'),
];

const updateDocumentValidation = [
    body("id").notEmpty().withMessage("ID is required.").bail().isInt({min: 1}).withMessage("ID must be a positive integer."),
    ...createDocumentValidation
];

const updateDocumentContentValidation = [
    body("id").notEmpty().withMessage("ID is required.").bail().isInt({min: 1}).withMessage("ID must be a positive integer."),
    body("html").notEmpty().withMessage("Content html is required."),
];

const updateDocumentTransferValidation = [
    body("id").notEmpty().withMessage("ID is required.").bail().isInt({min: 1}).withMessage("ID must be a positive integer."),
];

const updateDocumentFeaturedValidation = [
    body("id").notEmpty().withMessage("ID is required.").bail().isInt({min: 1}).withMessage("ID must be a positive integer."),
];

const updateDocumentStatusValidation = [
    body("id").notEmpty().withMessage("ID is required.").bail().isInt({min: 1}).withMessage("ID must be a positive integer."),
];

const deleteDocumentValidation = [
    body("id").notEmpty().withMessage("ID is required.").bail().isInt({min: 1}).withMessage("ID must be a positive integer."),
];

module.exports = {
    retrieveDocumentByIdValidation,
    createDocumentValidation,
    updateDocumentValidation,
    updateDocumentContentValidation,
    updateDocumentTransferValidation,
    updateDocumentFeaturedValidation,
    updateDocumentStatusValidation,
    deleteDocumentValidation
};