
const error = (message, errors = []) => {
    return {
        message,
        errors,
        type: 'error',
        success: false,
    }
}
const success = (message, data) => {
    return {
        message,
        data,
        type: "success",
        success: true,
    }
}
const response = (data, message = "success") => {
    return {
        data,
        type: "success",
        message,
        success: true,
    }
}
const wrapRequestHandler = (fn) => (req, res, next) => fn(req, res, next).catch(next);


module.exports = {
    error,
    wrapRequestHandler,
    success,
    response
}