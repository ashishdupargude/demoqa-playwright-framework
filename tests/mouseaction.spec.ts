import{test,expect} from '@playwright/test'

test('mouseaction', async ({page})=>
{
    await page.goto("https://www.testmuai.com/selenium-playground/")
   // await page.getByRole('button', {name:'Electronics'}).hover()
   await page.getByRole('link',{name:'Platform '}).hover() 

   
   await page.pause()

})