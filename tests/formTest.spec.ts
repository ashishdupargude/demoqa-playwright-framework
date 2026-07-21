import { expect} from "@playwright/test"
import{test} from "../fixtures/MyCoustomFixture"



test('Form test' , async ({page,formPage }) => {
    //const form = new Form (page)


    const appurl = "https://demoqa.com/automation-practice-form"
    await formPage.navigate(appurl)
    await formPage.enterFirstName('ad')
    await formPage.enterLastName('Ad')
    expect (page.url()).toBe(appurl)

})