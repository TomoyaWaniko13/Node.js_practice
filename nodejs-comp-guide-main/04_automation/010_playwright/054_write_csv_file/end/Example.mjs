import {chromium} from "@playwright/test";
import {Parser} from "json2csv";
import * as fs from "fs";

(async () => {
    const browser = await chromium.launch({headless: false, slowMo: 500})
    const page = await browser.newPage();
    await page.goto(' http://localhost:3000');

    const cardsLocator = page.locator(".cards.list-group-item");
    const numberOfCards = await cardsLocator.count();

    const fetchedCards = [];

    for (let i = 0; i < numberOfCards; i++) {
        const eachCardLocator = cardsLocator.locator(`nth=${i} >> a`);
        const cardText = await eachCardLocator.textContent();

        await eachCardLocator.click();
        const companyLocator = page.locator('.card-title.company');
        const companyText = await companyLocator.textContent();

        fetchedCards.push({
            name:cardText,
            company: companyText
        })

        const backLocator = page.locator('text=戻る');
        await backLocator.click();
    }
    await browser.close();

    const parser = new Parser();
    const csv = parser.parse(fetchedCards);
    fs.writeFileSync("./text-data.csv", csv);
})();