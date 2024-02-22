import {chromium} from "@playwright/test";

// @see セレクターのチェーンの利用方法(>>)
// https://playwright.dev/docs/selectors#chaining-selectors

(async () => {
    const browser = await chromium.launch({headless: false, slowMo: 500});
    const page = await browser.newPage();
    await page.goto("http://localhost:3000");

    const inputLocator = page.locator('//*[@id="__next"]/div/div[1]/label/input');
    await inputLocator.type('美');
    await page.waitForTimeout(2000);

    const thirdPageLocator = page.locator('.page-link.page-number >> nth=2');
    await thirdPageLocator.click();
    await page.waitForTimeout(2000);


    const pageTitleLocator = page.locator('.cards.list-group-item');
    const parentLocator = pageTitleLocator.locator('..');

    const pageTitle = await parentLocator.innerHTML();
    console.log(pageTitle);

    await page.waitForTimeout(2000);

    await browser.close();
})();
