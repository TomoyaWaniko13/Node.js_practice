import {chromium} from "@playwright/test";

async function getEmployeesByScraping() {
    const browser = await chromium.launch({headless: false, slowMo: 50});
    const page = await browser.newPage();
    await page.goto('http://localhost:3000');

    const cardsLocator = page.locator('.cards.list-group-item');
    const numberOfCards = await cardsLocator.count();

    const fetchedCard = [];

    for (let i = 0; i < numberOfCards; i++) {
        const eachCardLocator = cardsLocator.locator(`nth=${i} >> a`);
        const name = await eachCardLocator.textContent();
        await eachCardLocator.click();
        const companyLocator = page.locator('.card-title.company');
        const company = await companyLocator.textContent();

        fetchedCard.push({
            name, company
        })

        const backLocator = page.locator('text=戻る');
        await backLocator.click();
    }

    await browser.close();

    return fetchedCard;
}


export {getEmployeesByScraping};