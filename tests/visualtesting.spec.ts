import { expect, test, Locator } from '@playwright/test'



//npx playwright test --update-snapshots


test('VisiualTest', async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await expect(await page.screenshot()).toMatchSnapshot('homepage.png')

})

test('visualTesting2', async ({ page }) => {

    await page .goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    await expect(page).toHaveScreenshot('homepage.png')
})