import { expect, test } from '@playwright/test'

test('amazon shop', async ({ page }) => {
    await page.goto('https://www.amazon.in/ref=nav_logo')

    await page.getByPlaceholder('Search Amazon.in').fill('yoga mat')

    await page.locator('#nav-search-submit-button').click()
   
      
    await page.pause()
})

test('dropdown', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/dropdown')
    await page.locator('#dropdown').selectOption('1')
    await expect(page.locator('#dropdown')).toHaveValue('1')


    await page.pause()
})
