import { expect, test } from '@playwright/test'

test('Screenshorts Demo', async ({ page }) => {

    //1) screenshot
    await page.goto('https://demowebshop.tricentis.com/')


    const timestamp = Date.now()  //Date.now i will genrate milliseconds or return the number  from january 1 1970

    await page.screenshot({ path: `screenshots/homepage${timestamp}.png`, fullPage: true })

    //capture the full page screenshot

    //DemoWebShop logo screeshots
   const logo = page.locator('[alt="Tricentis Demo Web Shop"]')

    await logo.screenshot({path: `screenshots/logo${timestamp}.png`})

})




