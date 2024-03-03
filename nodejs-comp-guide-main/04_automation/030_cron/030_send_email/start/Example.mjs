import env from "dotenv";
import nodemailer from "nodemailer";

env.config({path: "../../../.env"});

(async () => {
    const message = {
        from: process.env.EMAIL_FROM,
        to: process.env.EMAIL_TO,
        subject: 'neko-san!!',
        text: 'this is sent by a Node.js code'
    }

    const smtpConfig = {
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL_FROM,
            pass: process.env.APP_PASS
        },
    };

    const transporter = nodemailer.createTransport(smtpConfig);

    transporter.sendMail()
})();
