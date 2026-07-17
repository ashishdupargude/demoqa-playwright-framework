import { expect, Page } from '@playwright/test'
import { BasePage } from './BasePage'

export class PracticeFormPage extends BasePage {

    //Property (locator)
    readonly firstName = this.page.locator("#firstName")

    readonly LastName = this.page.locator("#lastName")

    readonly maleRadio = this.page.locator('label[for=gender-radio-1]')

    readonly sportsCheckbox = this.page.locator("label[for='hobbies-checkbox-1']")

    readonly Email = this.page.locator("#userEmail")

    readonly MobNumber = this.page.locator("#userNumber")

    readonly dateOfBirthInput = this.page.locator("#dateOfBirthInput")
    readonly SelectMonth = this.page.locator(".react-datepicker__month-select")
    readonly SelectYear = this.page.locator(".react-datepicker__year-select")

    readonly SelectSubject = this.page.locator("#subjectsInput")

    readonly chooseFile = this.page.locator("#uploadPicture")

    //readonly Address = this.page.locator(".Current Address")
    readonly Address = this.page.getByPlaceholder("Current Address")

    readonly StateL = this.page.locator("#react-select-3-input")
    readonly CityL = this.page.locator("#city")

    //clicksubmit button

    readonly SubmitL = this.page.locator("#submit")

    //Verification 
    readonly SucessModel = this.page.locator(".modal-content")
    readonly SucessTitle = this.page.locator("#example-modal-sizes-title-lg")


    constructor(page: Page) {
        super(page)
    }
    //Method
    async navigate() {
        await this.page.goto('https://demoqa.com/automation-practice-form')

    }

    async enterFirstName(name: string) {
        await this.fill(this.firstName, name)

    }
    async enterLastName(name: string) {
        await this.fill(this.LastName, name)

    }
    async selectMale() {
        await this.click(this.maleRadio)
    }
    async clickSports() {
        await this.click(this.sportsCheckbox)
    }
    async enterEmail(name: string) {
        await this.fill(this.Email, name)
    }
    async enterMobNumber(name: string) {
        await this.fill(this.MobNumber, name)
    }

    async selectDateOfBirth(month: string, year: string, day: string) {
        await this.click(this.dateOfBirthInput)

        await this.selectOption(this.SelectMonth, month)

        await this.selectOption(this.SelectYear, year)
        const formattedDay = day.padStart(3, "0")
        const date = this.page.locator(`.react-datepicker__day--${formattedDay}`)
        await this.click(date)


    }

    async Subject(name: string) {
        await this.fill(this.SelectSubject, name)
        await this.SelectSubject.press('Enter')

    }

    async FileUpload(filePath: string) {
        await this.uploadFile(this.chooseFile, filePath)

    }

    async CurrentAddress(name: string) {
        await this.fill(this.Address, name)
    }

    async StateAndCity(State: string, city: string) {

        await this.scrollIntoView(this.StateL)
        await this.click(this.StateL)
        await this.page.getByText(State).click()

        await this.click(this.CityL)
        await this.page.getByText(city).click()


    }

    async SubmitButton() {
        await this.click(this.SubmitL)
    }


    async verification() {
        await expect(this.SucessModel).toBeVisible()
        await expect(this.SucessTitle).toHaveText("Thanks for submitting the form")

    }



}