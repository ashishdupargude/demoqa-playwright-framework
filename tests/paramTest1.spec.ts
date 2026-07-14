import { expect, test } from '@playwright/test'

const searchItems: string[] = ['laptop', 'Gift card', 'smartphone']

test.describe('search functionality tests',() => {

    test.beforeEach(async ({page}) => { 

       await page.goto('https://demowebshop.tricentis.com/')
    })


for (const item of searchItems) {

    test(`Search, ${item}`, async ({ page }) => {
        

        // await page.getByRole('textbox', {name:'search store'}).fill(item)  it wiill not work bcoz there is is no html accesible name called <label>
        await page.locator('#small-searchterms').fill(item)
        await page.getByRole('button', { name: 'search' }).click()

        await expect(page.locator('.product-title').nth(0)).toContainText(item, { ignoreCase: true })

    })
}
})