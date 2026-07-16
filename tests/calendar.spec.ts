import { expect, test } from '@playwright/test'

test('calendar', async ({ page }) => {

    await page.goto('https://playground.bondaracademy.com/pages/iot-dashboard')
    await page.getByText('Forms').click()
    await page.getByRole('link', { name: 'Datepicker' }).click()

    const calendarInduptField = page.getByPlaceholder('Form Picker')
    await calendarInduptField.click()

    let date = new Date()
    console.log(date)

    date.setDate(date.getDate() + 1)
    console.log(date)

    const excutedDate = date.getDate().toString()  //convert number to strning 
    const excutedMonth = date.toLocaleDateString('en-us', { month: 'short' })
    const excutedYear = date.getFullYear()

    const dateToAssert = `${excutedMonth} ${excutedDate}, ${excutedYear}`




    await page.locator('nb-calendar-day-cell:not(.bounding-month )').getByText(excutedDate, { exact: true }).click()
    await expect(calendarInduptField).toHaveValue(dateToAssert)


    await page.pause()



})