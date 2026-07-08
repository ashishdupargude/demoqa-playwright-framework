//import { test } from '@playwright/test'

import { test ,expect } from "../fixtures/practiceFixture"

//import { PracticeFormPage } from '../pages/PracticeFormPage'
import practiceFormData from "../test-data/practiceForm.json"




test("addUsername" , async ({ page, practiceForm }) => {



    await practiceForm.enterFirstName(practiceFormData.firstName)
    await practiceForm.enterLastName(practiceFormData.lastName)
    //await practiceFrom.click("maleRadio")
    await practiceForm.selectMale()
    await practiceForm.clickSports()

    await practiceForm.enterEmail(practiceFormData.email)
    await practiceForm.enterMobNumber(practiceFormData.mobile)

    //select DOB
    await practiceForm.selectDateOfBirth(practiceFormData.month, practiceFormData.year, practiceFormData.day)
    //Select Subject
    await practiceForm.Subject(practiceFormData.subject)
    


    //await practiceFrom.FileUpload("test-data/ChatGPT Image Jun 6, 2026, 02_07_04 PM.png")

    //  await practiceFrom.FileUpload("C:/Users/lenovo/Downloads")
    await practiceForm.FileUpload("C:/Users/lenovo/Downloads/ChatGPT Image Jun 6, 2026, 02_07_04 PM.png")  //both work above one as well
    
    await practiceForm.CurrentAddress(practiceFormData.address)

    await practiceForm.StateAndCity(practiceFormData.state , practiceFormData.city)

    await practiceForm.SubmitButton() 
    

    await practiceForm.verification()

    await page.pause()

})



