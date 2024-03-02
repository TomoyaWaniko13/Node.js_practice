import env from 'dotenv';
import {createRequire} from "module";
import {GoogleSpreadsheet} from "google-spreadsheet";
// .envファイルの新しいパスを指定
env.config({path: '../../../.env'});

const require = createRequire(import.meta.url);
const secrets = require('../../../google_secrets.json');

(async () => {
    const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID);

    await doc.useServiceAccountAuth({
        client_email: secrets.client_email,
        private_key: secrets.private_key
    })

    await doc.loadInfo();

    const sheet = doc.sheetsByIndex[0];
    await sheet.loadCells('A1:C5');

    const a1 = sheet.getCellByA1('A1');

    a1.value = 0;

    await sheet.saveUpdatedCells();
})();