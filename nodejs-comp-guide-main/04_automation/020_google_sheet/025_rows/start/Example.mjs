import {GoogleSpreadsheet} from "google-spreadsheet";
import env from "dotenv";
import {createRequire} from "module";

env.config({path: '../../../.env'});
const require = createRequire(import.meta.url);
const secrets = require('../../../google_secrets.json');


(async () => {
    const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID);

    await doc.useServiceAccountAuth({
        client_email: secrets.client_email,
        private_key: secrets.private_key
    });

    await doc.loadInfo();

    const peopleSheet = doc.sheetsByTitle['people'];

    const rows = await peopleSheet.addRows([
        {
            name:'Kevin',
            age:18,
            gender: 'M'
        },
        {
            name:'LB',
            age: 20,
            gender: 'F'
        },
        {
            name:"JJ",
            age:40,
            gender:'F'
        }
    ])
})();