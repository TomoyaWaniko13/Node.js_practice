import {GoogleSpreadsheet} from "google-spreadsheet";
import env from "dotenv";
env.config();
import {createRequire} from "module";
const require = createRequire(import.meta.url);
const secrets = require('../../../google_secrets.json');


    //https://docs.google.com/spreadsheets/d/10xihAYhtdWP5xZObOcqty3_ajzI1dJJoot46A2tVnTY/edit#gid=0

    (async () => {
        const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID);

        await doc.useServiceAccountAuth({
            client_email: secrets.client_email,
            private_key: secrets.private_key
        })

        await doc.loadInfo();

        const sheet = doc.sheetsByIndex[0];
        await sheet.loadCells('A1:C4');

        const a1 = sheet.getCell(0, 0);
        const b2 = sheet.getCellByA1('B2');

        console.log(a1.value);
        console.log(b2.value);
    })();
