const {success} = require('../../../helpers/response');
const nodemailer = require('nodemailer');
const ejs = require('ejs');
const path = require("path");

const sendContactService = async (req) => {

    const {name, email, company, service, message} = req.body;

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
            user: 'agrac408@gmail.com',
            pass: 'wcjmaggojcrjhceg'
        }
    });

    ejs.renderFile(path.join(process.cwd(), 'src/views/', 'ownerMailTemplate.ejs'), {
        name,
        email,
        company,
        service,
        message
    }, async (error, template) => {
        if (!error) {
            transporter.sendMail({
                from: 'agrac408@gmail.com',
                to: 'yashkumarjha20@gmail.com',
                subject: "New Lead",
                html: template
            });
        }
    });

    ejs.renderFile(path.join(process.cwd(), 'src/views/', 'userEmailTemplate.ejs'), {name}, async (error, template) => {
        if (!error) {
            transporter.sendMail({
                from: 'agrac408@gmail.com',
                to: email,
                subject: "",
                html: template
            });
        }
    })


    return success('Email sent.');

};

module.exports = sendContactService;