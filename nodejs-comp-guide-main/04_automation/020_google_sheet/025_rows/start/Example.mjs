import env from "dotenv";
import {createRequire} from "module";
import {GoogleSpreadsheet} from "google-spreadsheet";
import {delay} from "./delay.mjs";

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

    const peopleSheet = doc.sheetsByTitle['people'];
    await peopleSheet.loadCells('A1:C13');

    const a1 = peopleSheet.getCellByA1('A1');
    const b1 = peopleSheet.getCellByA1('B1');
    const c1 = peopleSheet.getCellByA1('C1');

    // a1.value = 'name';
    // b1.value = 'age';
    // c1.value = 'gender';
    //
    // await peopleSheet.saveUpdatedCells();

    await peopleSheet.addRows([
        {
            name: 'basic neko san',
            age: 10,
            gender: 'f'
        },
        {
            name: 'big neko san',
            age: 2,
            gender: 'm'
        },
        {
            name: 'ghost neko san',
            age: 10,
            gender: 'f'
        }
    ])

    // await delay(2000);
    //
    // for (let i = 1; i < 4; i++) {
    //     for (let j = 0; j < 3; j++) {
    //         const cell = peopleSheet.getCell(i, j);
    //         cell.value = null;
    //     }
    //     await peopleSheet.saveUpdatedCells();
    // }
})();