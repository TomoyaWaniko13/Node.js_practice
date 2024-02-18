import {chromium} from "@playwright/test";

(async () => {
    const browser = await chromium.launch({headless:false, slowMo: 500});
    const page = await browser.newPage();
    await page.goto("http://localhost:3000");


    //css
    const pageTitleLocator =  page.locator('.navbar-brand');
    const pageTitle = await pageTitleLocator.innerText();

    //t
    const textLocator = await page.locator('text=名刺管理アプリ');
    const pageText = await textLocator.innerText();
    console.log(pageText);

    const xpathLocator = await page.locator('xpath=//*[@id="__next"]/nav/div/a');
    const xpathText = await xpathLocator.innerText();
    console.log(xpathText);
})();