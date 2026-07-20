import {expect,test} from  "@playwright/test"

test.beforeEach(async ({page}) => {
      await page.goto('https://www.amazon.in/')

})

test('TC1', async ({page}) => {

    await page.locator('.nav-cart-icon.nav-sprite').click()

})

test('TC2', async ({page}) => {
 
  await page.locator('#nav-link-accountList-nav-line-1').click()

})