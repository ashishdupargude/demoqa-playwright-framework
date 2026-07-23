import { test, expect } from '@playwright/test'

test('shadowDOM', async ({ page }) => {

    await page.goto('https://letcode.in/shadow/')

    await page.locator('#fname').fill('ashish')  //normal shawoDOM
    //  await page.getByRole('textbox', {name:'Enter your first name'}).fill('ashish') //this getbyrole not work here bcoz the is no accssibleName is not there in website  HTML
    await page.pause()
})

test('iframeInShadowDOm', async ({ page }) => {
    await page.goto('https://selectorshub.com/shadow-dom-in-iframe/')

    await page.frameLocator('#pact').first().locator('#tea').fill("Ashish") //--> recommened

    // const dom =  page.locator('#pact').first().contentFrame() --> work but not recmmended
    // await dom.locator('#tea').fill("Ashish")


})
