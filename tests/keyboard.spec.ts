import {test,expect} from '@playwright/test'
test('keyboard action', async ({page}) => {

    await page.goto('https://gotranscript.com/text-compare')

    // const  iMac = process.platform === 'darwin'
    //const  iMac = process.platform === 'win32'
    // const modifierkey = iMac ? 'Meta' : 'Control'


    await page.getByPlaceholder('Paste one version of the text here.').fill('ashish')
    await page.keyboard.press('Control+A')
    await page.keyboard.press('Control+C')
    // await page.keyboard.down('Tab')
    // await page.keyboard.up('Tab')
    await page.keyboard.press('Tab')
    await page.keyboard.press('Control+V')

    await expect(page.locator('[name="text2"]')).toHaveValue('ashish')
    await page.pause()


})