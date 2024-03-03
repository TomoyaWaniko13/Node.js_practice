import cron from 'node-cron';
import {addEmployeesToGS} from "./google-sheet.mjs";
import {sendEmail} from "./email.mjs";

cron.schedule('*/20 * * * * *', () => {
    main();
});

async function main() {
    const dt = new Date();
    const dtStr = dt.toDateString();

    const sheetUrl = `https://docs.google.com/spreadsheets/d/${process.env.GOOGLE_SHEET_ID}`

    try{
        await addEmployeesToGS();
        sendEmail('task completed successfully', `${dtStr}\n${sheetUrl}`);
    }catch (e) {
        sendEmail('task failed', `${dtStr}\n${e}`);
    }
}
