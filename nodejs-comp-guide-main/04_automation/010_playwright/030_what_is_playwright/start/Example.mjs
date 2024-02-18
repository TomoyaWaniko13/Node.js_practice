import {chromium} from "@playwright/test";

const browser = await chromium.launch({headless: false, slowMo:1000});
const page = await browser.newPage();
await page.goto("http://localhost:3000");
const htmlString = await page.content();

console.log(htmlString);

await browser.close();
