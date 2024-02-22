import {chromium} from "@playwright/test";

(async () => {
    const browser = await chromium.launch({headless: false, slowMo: 500})
    const page = await browser.newPage();
    await page.goto('http://localhost:3000');

    const cardsLocator = page.locator('.cards.list-group-item');
    const numberOfCards = await cardsLocator.count();

    const firstCardLocator =  cardsLocator.locator('nth=0');
    console.log(await firstCardLocator.textContent());


    await firstCardLocator.click();

    await page.waitForTimeout(10000);

    await browser.close();
})();
