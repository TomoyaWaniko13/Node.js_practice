import cron from "node-cron";
import {sendEmail} from "./email.mjs";

cron.schedule('* * * * * *', () => {
    main();
});

async function main() {
    const dt = new Date();

    /*converts the Date object to a more readable string format that contains
     the date part only (e.g., "Mon Jan 01 2024").*/
    const dtStr = dt.toDateString();

    const sheetURL = 'https://docs.google.com/spreadsheets/d/10xihAYhtdWP5xZObOcqty3_ajzI1dJJoot46A2tVnTY/edit#gid=744277882';

    try {
        sendEmail('A process has executed.', `time when the process has executed:${dtStr}\n${sheetURL}`);
    } catch (e) {
        sendEmail('An error has occurred.', `Time when the error occurred:${dtStr}\n${e}`);
    }
}