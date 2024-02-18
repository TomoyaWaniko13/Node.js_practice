/**
 * 練習問題
 * [佐藤]で検索して、一番最後に出てくる人物の名前を取得してください。
 */
import {chromium} from "@playwright/test";

(async () => {
    const browser = await chromium.launch({headless: false, slowMo: 500})
    const page = await browser.newPage();
    await page.goto("http://localhost:3000");

    const inputLocator = page.locator('//*[@id="__next"]/div/div[1]/label/input');
    await inputLocator.type('佐藤');

    const pageLocator = page.locator('.page-link.page-number >> nth=-1');
    await pageLocator.count();


    const lastCardLocator = page.locator('.cards.list-group-item >> nth=-1');
    const lastCardName = await lastCardLocator.textContent();
    console.log(lastCardName);

    await browser.close();

})();
