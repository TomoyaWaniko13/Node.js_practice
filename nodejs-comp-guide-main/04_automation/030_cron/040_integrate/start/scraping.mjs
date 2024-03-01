import {chromium} from "@playwright/test";
import env from "dotenv";
env.config({path: "../../../.env"});


async function getEmployeesByScraping() {

    const browser = await chromium.launch({headless: false, slowMo: 50})
    const page = await browser.newPage();
    await page.goto(process.env.TARGET_URL);

    const cardsLocator = page.locator('.cards.list-group-item');
    const numberOfCards = await cardsLocator.count();

    const fetchedCard = [];

    for (let i = 0; i < numberOfCards; i++) {
        const eachCardLocator = cardsLocator.locator(`nth=${i} >> a`);
        const cardText = await eachCardLocator.textContent();
        await eachCardLocator.click();

        const companyLocator = page.locator('.card-title.company');
        const companyText = await companyLocator.textContent();

        fetchedCard.push({
            company: companyText,
            name: cardText
        })

        const backLocator = page.locator('text=戻る');
        await backLocator.click();
    }

    await browser.close();
    console.log(fetchedCard);
    return fetchedCard;
}

getEmployeesByScraping();

export {getEmployeesByScraping};