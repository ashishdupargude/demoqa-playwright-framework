import { expect, test } from '@playwright/test'
import { NavigationPage } from '../pages/NavigationPage'
import { FromLayoutsPage } from '../pages/FromLayoutsPage'
import { DatePickerPage } from '../pages/DatePickerPage'


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

test('paramterized method', async ({ page }) => {

    const navigateTo = new NavigationPage(page)
    const onFormLayoutsPage = new FromLayoutsPage(page)


    await navigateTo.FromLayoutsPage()
    await onFormLayoutsPage.submitUsingTHeGridWithFromCredentialsAndSelectOption('abc@test.com', '1234', 'Option 1')

})

test('LineForm', async ({ page }) => {
    const navigateTo = new NavigationPage(page)
    const onInlineFormPage = new FromLayoutsPage(page)

    await navigateTo.FromLayoutsPage()
    await onInlineFormPage.submitInlineformWithEmailandCheckbox('ashish', 'ashish@gmail.com', true)
    
})

test('DatePick', async ({ page }) => {
    const navigateTo = new NavigationPage(page)
    const onFormLayoutsPage = new FromLayoutsPage(page)
    const onDatePickerPage = new DatePickerPage(page)


    await navigateTo.datePickerPage()
    await onDatePickerPage.selectDatePickerDateFromTOday(5000)
   await page.pause()
    
})
