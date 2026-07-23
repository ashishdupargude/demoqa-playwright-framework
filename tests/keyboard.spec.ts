import {test,expect} from '@playwright/test'
test('keyboard action', async ({page}) => {

    await page.goto('https://gotranscript.com/text-compare')

    await page.getByPlaceholder('Paste one version of the text here.').fill('ashish')
    await page.keyboard.press('Control+A')
    await page.keyboard.press('Control+C')
    // await page.keyboard.down('Tab')
    // await page.keyboard.up('Tab')
    await page.keyboard.press('Tab')
    await page.keyboard.press('Control+V')
    await page.pause()


})