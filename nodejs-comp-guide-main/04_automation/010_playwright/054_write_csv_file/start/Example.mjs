import {chromium} from "@playwright/test";
import * as fs from "fs";
import {Parser} from "json2csv";

(async () => {
    const browser = await chromium.launch({headless: false, slowMo: 500})
    const page = await browser.newPage();
    await page.goto('http://localhost:3000');

    const cardsLocator = page.locator('.cards.list-group-item');
    const numberOfCards = await cardsLocator.count();

    const cardsTexts = [];

    for (let i = 0; i < numberOfCards; i++) {
        const eachCardLocator = cardsLocator.locator(`nth=${i}`);
        const eachCardText = await eachCardLocator.textContent();
        cardsTexts.push({
            name: eachCardText
        })
    }
    await browser.close();

    const parser = new Parser();
    const csv = parser.parse(cardsTexts);
    fs.writeFileSync("./text-data.csv", csv);

})();
