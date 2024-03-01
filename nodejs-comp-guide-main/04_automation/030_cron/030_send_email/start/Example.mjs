import env from 'dotenv';

env.config({path: '../../../.env'});

(async () => {

    const message = {
        from: process.env.EMAIL_FROM,
        to: process.env.EMAIL_TO,
        subject: 'subject of this email',
        text: 'これはスクリプトによって送信されました。\n改行後'
    }

    const
})();
