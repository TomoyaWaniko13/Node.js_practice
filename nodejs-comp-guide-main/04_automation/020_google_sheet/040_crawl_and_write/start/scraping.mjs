import {chromium} from "@playwright/test";


export async function getEmployeesByScraping() {
    const browser = await chromium.launch({headless: false, slowMo: 100})
    const page = await browser.newPage();
    await page.goto('http://localhost:3000');

    const cardsLocator = page.locator('.cards.list-group-item');
    const numberOfCards = await cardsLocator.count();
    console.log(numberOfCards);

    const fetchedCards = [];

    for (let i = 0; i < numberOfCards; i++) {
        const eachCardLocator = cardsLocator.locator(`nth=${i} >> a`);
        const cardText = await eachCardLocator.textContent();
        await eachCardLocator.click();

        const companyLocator = page.locator('.card-title.company');
        const companyText = await companyLocator.textContent();

        fetchedCards.push({
            company: companyText,
            name: cardText
        })

        const backLocator = page.locator('text=戻る');
        await backLocator.click();
    }

    await browser.close();

    return fetchedCards;
}

