import { Page, Locator } from '@playwright/test'
export class BasePage {

    constructor(protected page: Page) { }

    async fill(locator: Locator, value: string) {
        await locator.fill(value);
    }

    async click(locator: Locator) {
        await locator.click()

    }

    async selectOption(locator: Locator, value: string) {
        await locator.selectOption(value)
    }

    async pressKey(locator: Locator, key: string){
        await locator.press(key)
    }

    async uploadfile(locator: Locator, filePath: string){
        await locator.setInputFiles(filePath)
    }
}
