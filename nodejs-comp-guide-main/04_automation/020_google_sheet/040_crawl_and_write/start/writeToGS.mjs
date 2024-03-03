import env from 'dotenv';
import {createRequire} from 'module';
import {getEmployeesByScraping} from "./scraping.mjs";
import {GoogleSpreadsheet} from "google-spreadsheet";

env.config();

const require = createRequire(import.meta.url);
const secrets = require('../../../google_secrets.json');

(async () => {
    const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID);

    await doc.useServiceAccountAuth({
        client_email: secrets.client_email,
        private_key: secrets.private_key
    })

    await doc.loadInfo();
    const employees = await getEmployeesByScraping();
    const sheet = doc.sheetsByTitle['scraping'];
    await sheet.addRows(employees);
})();