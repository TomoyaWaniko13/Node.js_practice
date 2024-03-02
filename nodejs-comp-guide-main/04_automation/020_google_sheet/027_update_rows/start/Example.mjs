import env from "dotenv";
import {createRequire} from "module";
import {GoogleSpreadsheet} from "google-spreadsheet";

env.config({path: '../../../.env'});
const require = createRequire(import.meta.url);
const secrets = require('../../../google_secrets.json');

(async () => {
    const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID);

    await doc.useServiceAccountAuth({
        client_email: secrets.client_email, private_key: secrets.private_key
    })

    await doc.loadInfo();

    const peopleSheet = doc.sheetsByTitle['people'];
    await peopleSheet.loadCells('A1:C13');
    const rows = await peopleSheet.getRows();
    console.log(rows.length);

    console.log(rows[0]);

    for (let i = 0; i < rows.length; i++) {
        rows[i].delete();
    }
})();