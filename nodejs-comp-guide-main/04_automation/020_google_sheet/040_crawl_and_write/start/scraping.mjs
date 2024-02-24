import {chromium}   from "@playwright/test";
import * as fs from 'fs';
import {Parser} from "json2csv";
import env from "dotenv";
env.config({path: '../../../.env'});

(async () => {
    const browser = await chromium.launch({headless: false, slowMo: 200});
    const page = await browser.newPage();
    await page.goto(process.env.TARGET_URL);

    const cardsLocator = page.locator('.cards.list-group-item');
    const numberOfCards = await cardsLocator.count();

    const fetchedCards = [];
    for (let i = 0; i < numberOfCards; i++) {
        const eachCardLocator = cardsLocator.locator(`nth=${i} >> a`);
        const cardText = await eachCardLocator.textContent();

        await eachCardLocator.click();
        const companyLocator = page.locator('.card-title.company');
        const companyText = await companyLocator.textContent();

        const backLocator = page.locator('text=戻る');
        await backLocator.click();

    }
})();