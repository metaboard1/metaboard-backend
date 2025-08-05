const {body} = require("express-validator");


const sendContactValidation = [
    body("name")
        .notEmpty()
        .withMessage("Name is required.")
        .bail()
        .isLength({min: 2, max: 100})
        .withMessage("Name must be between 2 and 100 characters.")
        .bail()
        .matches(/^[a-zA-Z\s\-'\.]+$/)
        .withMessage("Name can only contain letters, spaces, hyphens, apostrophes, and periods.")
        .bail()
        .trim(),

    body("email")
        .notEmpty()
        .withMessage("Email is required.")
        .bail()
        .isEmail()
        .withMessage("Please provide a valid email address.")
        .bail()
        .isLength({max: 254})
        .withMessage("Email address is too long.")
        .bail()
        .normalizeEmail({
            gmail_remove_dots: false,
            gmail_remove_subaddress: false,
            outlookdotcom_remove_subaddress: false,
            yahoo_remove_subaddress: false,
            icloud_remove_subaddress: false
        }),

    body("company")
        .notEmpty()
        .withMessage("company is required.")
        .bail()
        .isLength({min: 2, max: 200})
        .withMessage("Company name must be between 2 and 200 characters.")
        .bail()
        .matches(/^[a-zA-Z0-9\s\-&.,()'+\/]+$/)
        .withMessage("Company name contains invalid characters.")
        .bail()
        .trim(),

    body("service")
        .notEmpty()
        .withMessage("Service is required."),

    body("message").optional()
];

module.exports = {
    sendContactValidation,
};