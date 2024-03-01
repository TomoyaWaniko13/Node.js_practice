import env from 'dotenv';
import {createRequire} from "module";
import {GoogleSpreadsheet} from "google-spreadsheet";
import {getEmployeesByScraping} from "./scraping.mjs";
env.config({path: '../../../.env'});
const require = createRequire(import.meta.url);
const secrets = require('../../../google_secrets.json');

async function addEmployeesToGS() {
    const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID);

    await doc.useServiceAccountAuth({
        client_email: secrets.client_email,
        private_key: secrets.private_key
    });

    await doc.loadInfo();
    const employees = await getEmployeesByScraping();
    const sheet = doc.sheetsByTitle('scraping');
    const rows = await sheet.addRows(employees);
    rows.forEach(row => row.save());
}

export {addEmployeesToGS};