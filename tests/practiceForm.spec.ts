import { test } from '@playwright/test'
import { PracticeFormPage } from '../pages/PracticeFormPage'

test('Open Practice Form', async ({ page }) => {

    const practiceFrom = new PracticeFormPage(page)
    await practiceFrom.navigate()
    await practiceFrom.enterFirstName("Ashish")
    await practiceFrom.enterLastName('Dupargude')
    //await practiceFrom.click("maleRadio")
    await practiceFrom.selectMale()
    await practiceFrom.clickSports()

    await practiceFrom.enterEmail("abc@gmail.com")
    await practiceFrom.enterMobNumber("1234567890")

    //select DOB
    await practiceFrom.selectDateOfBirth("August", "1999", "15")
    //Select Subject
    await practiceFrom.Subject("English")
    


    //await practiceFrom.FileUpload("test-data/ChatGPT Image Jun 6, 2026, 02_07_04 PM.png")

    //  await practiceFrom.FileUpload("C:/Users/lenovo/Downloads")
    await practiceFrom.FileUpload("C:/Users/lenovo/Downloads/ChatGPT Image Jun 6, 2026, 02_07_04 PM.png");//both work above one as well
    await page.pause()

})



