import env from 'dotenv';
import nodemailer from "nodemailer";

env.config({path: "../../../.env"});

async function sendEmail(subject, text) {

    const message = {
        from: process.env.EMAIL_FROM,
        to: process.env.EMAIL_TO,
        subject,
        text
    }

    const smtpConfig = {
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL_FROM,
            pass: process.env.APP_PASS
        }
    };

    const transporter = nodemailer.createTransport(smtpConfig);

    transporter.sendMail(message, function (err, response) {
        console.log(err || response);
    })
}

export {sendEmail};