import {GoogleSpreadsheet} from "google-spreadsheet";
import env from "dotenv";
import {createRequire} from "module";
env.config({path: '../../../.env'});
const require = createRequire(import.meta.url);
const secrets = require('../../../google_secrets.json');

/**
 * 問題：
 * 以下の値をシートを完成させてください。
 * * `cart` シートの作成、name, priceの挿入は手動で行ってください。
 * name   | price
 * Orange | 120
 * Banana | 50
 * Apple  | 100
 * 合計    | 270
 */
(async () => {
  const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID);

  await doc.useServiceAccountAuth({
    client_email: secrets.client_email,
    private_key: secrets.private_key,
  });

  await doc.loadInfo();

  const cartSheet = doc.sheetsByTitle['cart'];
  await cartSheet.addRows([
    {name: 'Orange', price: 120},
    {name: 'Banana', price: 50},
    {name: 'Apple', price: 100},
    {name: 'Total', price: '=SUM(B2:B4)'}
  ]);

})();
