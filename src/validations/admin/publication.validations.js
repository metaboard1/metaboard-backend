const {body} = require("express-validator");


const isbnRegexp = /^(?:ISBN(?:-1[03])?:? )?(?=[0-9X]{10}$|(?=(?:[0-9]+[- ]){3})[- 0-9X]{13}$|97[89][0-9]{10}$|(?=(?:[0-9]+[- ]){4})[- 0-9]{17}$)(?:97[89][- ]?)?[0-9]{1,5}[- ]?[0-9]+[- ]?[0-9]+[- ]?[0-9X]$/;

const createPublicationValidation = [
    body('title').notEmpty().withMessage('Title is required').bail().isString().withMessage('Title must be a string'),
    // body('subTitle').notEmpty().withMessage('Sub title is required').bail().isString().withMessage('Sub title must be a string'),
    body('description').notEmpty().withMessage('Description is required').bail().isString().withMessage('Description must be a string'),
    body('pages').notEmpty().withMessage('Pages is required').bail().isInt({min: 1}).withMessage('Pages must be a positive integer.'),
    body('price').notEmpty().withMessage('Price is required').bail().isInt({min: 50}).withMessage('price must be a positive integer.'),
    body('isbn').notEmpty().withMessage('ISBN no is required').bail().matches(isbnRegexp).withMessage('ISBN no must be valid.'),
    body('publisher').notEmpty().withMessage('Publisher name is required').bail().isString().withMessage('Publisher name must be a string'),
    body('publicationDate').notEmpty().withMessage('Publication date is required').bail().isISO8601().withMessage("Publication date must be a valid date.").toDate(),
    body('authors').notEmpty().withMessage('Author names is required').bail().custom((tagsStr)=> tagsStr.trim().split(',').every((elem)=>/^[a-zA-Z\s]+$/.test(elem))).withMessage('Author names must contain only alphabets (a–z), for example: yash,joy,marcus and special characters are not allowed.'),
    body('storeLink').optional().isURL().withMessage('Store link must be a valid URL'),

    // body('storeLinks').optional().isJSON().withMessage('Store links must be valid JSON').customSanitizer((value) => JSON.parse(value)),
    // body('storeLinks.amazon').optional().isURL().withMessage('Amazon link must be a valid URL')
    //     .bail()
    //     .matches(/^https:\/\/(www\.)?amazon\.[a-z]{2,3}(\.[a-z]{2})?\/.*$/)
    //     .withMessage('Must be a valid Amazon product URL'),
    // body('storeLinks.flipkart').optional().isURL().withMessage('Flipkart link must be a valid URL')
    //     .bail()
    //     .matches(/^https:\/\/(www\.)?flipkart\.com\/.*$/)
    //     .withMessage('Must be a valid Flipkart product URL'),

    // body('storeLinks.amazon').optional().isString().withMessage('Amazon handle must be a string'),
    // body('storeLinks.flipkart').optional().isString().withMessage('Flipkart profile must be a string'),
];

const updatePublicationValidation = [
    body("id").notEmpty().withMessage("ID is required.").bail().isInt({min: 1}).withMessage("ID must be a positive integer."),
    ...createPublicationValidation
];


const updatePublicationStatusValidation = [
    body("id").notEmpty().withMessage("ID is required.").bail().isInt({min: 1}).withMessage("ID must be a positive integer."),
];

const deletePublicationValidation = [
    body("id").notEmpty().withMessage("ID is required.").bail().isInt({min: 1}).withMessage("ID must be a positive integer."),
];


module.exports = {
    createPublicationValidation,
    updatePublicationValidation,
    updatePublicationStatusValidation,
    deletePublicationValidation
};