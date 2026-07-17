import { Locator, Page } from "@playwright/test";

//As par best practics we should seprate the locator from the function
export class FromLayoutsPage {

    readonly page: Page
    constructor(page: Page) {

        this.page = page

    }

    async submitUsingTHeGridWithFromCredentialsAndSelectOption(email: string, password: string, optionText: string) {

        const formBox = this.page.locator('nb-card', { hasText: 'Using the Grid' })
        await formBox.getByRole('textbox', { name: 'Email' }).fill(email)
        await formBox.getByRole('textbox', { name: 'Password' }).fill(password)
        await formBox.getByRole('radio',{name:optionText}).check({force:true})

        await formBox.getByRole('button', { name: 'Sign in' }).click()

    }
}


