import cron from 'node-cron';
import {addEmployeesToGS} from "./google-sheet.mjs";

cron.schedule('* * * * *', () => {
    addEmployeesToGS()
})