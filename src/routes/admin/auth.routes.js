const {apiRouter} = require("../apiRouter");
const {validate} = require("../../helpers/validations");
const {loginValidation} = require("../../validations/admin/auth.validations");
const {wrapRequestHandler, error} = require("../../helpers/response");
const {loginController} = require("../../controllers/admin/auth");
const {rateLimit} = require('express-rate-limit');

const limiter = rateLimit({
    windowMs:  5 * 60 * 1000,
    limit: 5,
    standardHeaders: 'draft-8',
    legacyHeaders: false,
    // keyGenerator: (req) => req.ip,
    ipv6Subnet: 56,
    message: error('Too many login attempts. Please try again in 5 minutes.')
})


apiRouter.post('/admin/login', limiter, validate(loginValidation), wrapRequestHandler(loginController));