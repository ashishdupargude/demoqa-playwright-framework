import { expect, test } from '@playwright/test'

test('HandelNewTab', async ({ context }) => {


    const page = await context.newPage();
    await page.goto('https://testpages.eviltester.com/pages/navigation/windows-names/')
    await expect(page).toHaveTitle('Windows Links Test Page | Test Pages')

    const pagePromis = context.waitForEvent('page')

    await page.getByRole('link', { name: 'Window with name in new tab' }).click()

    const newPage = await pagePromis
    //await expect(newPage).toHaveTitle('Linked Page with Window Name | Test Pages');
    await newPage.locator('#window-name-button').click()
    await expect(newPage).toHaveTitle('Linked Page with Window Name | Test Pages');

    await page.pause()


}) 