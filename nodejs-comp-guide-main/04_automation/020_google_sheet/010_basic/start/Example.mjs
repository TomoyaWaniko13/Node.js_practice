import env from "dotenv";
import {GoogleSpreadsheet} from "google-spreadsheet";
import {createRequire} from "module";

const require = createRequire(import.meta.url);
const secrets = require('../../../google_secrets.json');

env.config({path: '../../../.env'});

(async () => {
    const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID);

    await doc.useServiceAccountAuth({
        client_email: secrets.client_email,
        private_key: secrets.private_key
    })

    await doc.loadInfo();

    const firstSheet = doc.sheetsByIndex[0];
    await firstSheet.loadCells('A1:C4');

    const a1 = firstSheet.getCellByA1('A1');
    const b1 = firstSheet.getCellByA1('B1');
    const c1 = firstSheet.getCellByA1('C1');

    console.log(`a1: ${a1.value}`);
    console.log(`b1: ${b1.value}`);
    console.log(`c1: ${c1.value}`);

})();