import { expect, test } from '@playwright/test'

const loginIDs: string[][] = [
    ["laura.taylor1234@example.com", "test123", "valid"],
    ["abc1@gmail.com", "pass1", "invalid"],
    ["abc2@gmail.com", "pass2", "invalid"],
    ["", "", "invalid"]
]
test.describe('login Tests', () => {

for (const [email,password,validity] of loginIDs ){

    const title = `${email || '<empty email>'} , ${password || '<empty password>'} -> ${validity} `

    test (title,async ({ page }) =>  {
        await page.goto('https://demowebshop.tricentis.com')
        
        //fill the login page

//await page.locator('#ico-login').click()
await page.getByRole('link',{name:'Log in'}).click()
await page.getByRole('textbox',{name:'Email'}).fill(email)
await page.getByRole('textbox',{name:'Password'}).fill(password)

await page.getByRole('button',{name:'Log in'}).click()

 if(validity.toLowerCase() === 'valid'){

    const logoutlink = page.getByRole('link',{name:'Log out'})
    await expect(logoutlink).toBeVisible()

 }
 else {
    //Assert the error message is visible and use remain login page

    const errorMessage = page.locator('.validation-summary-errors')
    await expect(errorMessage).toBeVisible()
    await expect(page).toHaveURL('https://demowebshop.tricentis.com/login')

 }


    })
}

})


   



