import { expect, test } from '@playwright/test'
import { NavigationPage } from '../pages/NavigationPage.spec'

test.beforeEach(async ({ page }) => {

    await page.goto('https://playground.bondaracademy.com/pages/iot-dashboard')
})

test('Navigate to fromLayoutsPage', async ({ page }) => {

    const navigateTo = new NavigationPage(page)
    await navigateTo.FromLayoutsPage()

    await navigateTo.datePickerPage()
    await navigateTo.smartTablePage()
    await navigateTo.tooltipPage()
    await navigateTo.tostrPage()
})
