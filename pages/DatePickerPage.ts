import { Locator, expect, Page } from "@playwright/test";

//as bestpractice we should seprate the locator from the sunctions

export class DatePickerPage {

    readonly page: Page
    constructor(page: Page) {
        this.page = page
    }

    async selectDatePickerDateFromTOday(numberofDaysFromToday: number) {
        const calendarInputField = this.page.getByPlaceholder('Form Picker')
        await calendarInputField.click()

        let date = new Date()
        date.setDate(date.getDate() + numberofDaysFromToday)


        const expectedDate = date.getDate().toString()//covert the number to string
        const expectedMonthShort = date.toLocaleDateString('en-us', { month: 'short' })
        const expectedMonthLong = date.toLocaleDateString('en-us', { month: 'long' })

        const expectedYear = date.getFullYear()
        const dateToAssert = `${expectedMonthShort} ${expectedDate} ${expectedYear}`

        //? is nullish coalesing operator
        //If the left side of the nullish conlescing operator is either null or undefined
        //it simply return the right hand side value

        let calendarMonthAndYear = await this.page.locator('nb-calendar-view-mode').textContent() ?? ''

        const expectedMonthAndYear = `${expectedMonthLong} ${expectedYear}`

        while (!calendarMonthAndYear.includes(expectedMonthAndYear)) {

            await this.page.locator('nb-calendar-pageable-navigation [data-name="chevron-right"]').click()

            calendarMonthAndYear = await this.page.locator('nb-calendar-view-mode').textContent() ?? ''

        }


    }
}