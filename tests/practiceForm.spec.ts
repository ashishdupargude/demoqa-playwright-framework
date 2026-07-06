import { test } from '@playwright/test'
import { PracticeFormPage } from '../pages/PracticeFormPage'

test('Open Practice Form', async ({ page }) => {

    const practiceForm = new PracticeFormPage(page)
    await practiceForm.navigate()
    await practiceForm.enterFirstName("Ashish")
    await practiceForm.enterLastName('Dupargude')
    //await practiceFrom.click("maleRadio")
    await practiceForm.selectMale()
    await practiceForm.clickSports()

    await practiceForm.enterEmail("abc@gmail.com")
    await practiceForm.enterMobNumber("1234567890")

    //select DOB
    await practiceForm.selectDateOfBirth("August", "1999", "15")
    //Select Subject
    await practiceForm.Subject("English")
    


    //await practiceFrom.FileUpload("test-data/ChatGPT Image Jun 6, 2026, 02_07_04 PM.png")

    //  await practiceFrom.FileUpload("C:/Users/lenovo/Downloads")
    await practiceForm.FileUpload("C:/Users/lenovo/Downloads/ChatGPT Image Jun 6, 2026, 02_07_04 PM.png")  //both work above one as well
    
    await practiceForm.CurrentAddress("Solapur Pune Raod")

    await practiceForm.StateAndCity("NCR" , "Delhi")

    await practiceForm.SubmitButton()

    await practiceForm.verification()

    await page.pause()

})



