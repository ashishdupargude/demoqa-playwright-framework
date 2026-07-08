
import { test as base } from "@playwright/test"
import { PracticeFormPage } from "../pages/PracticeFormPage"
export { expect } from "@playwright/test"

type MyFixtures = {
    practiceForm: PracticeFormPage

}
export const test = base.extend<MyFixtures>({
    practiceForm : async ({ page }, use) => {
        const practiceForm = new PracticeFormPage(page) 
        await practiceForm.navigate()
        await use(practiceForm)

    }
})
