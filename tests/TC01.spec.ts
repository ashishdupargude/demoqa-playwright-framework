import { expect, test } from '@playwright/test'
test('Student Registration', async ({ page }) => {
    await page.goto('https://demoqa.com/automation-practice-form')
    await page.getByRole('textbox', { name: 'First Name' }).fill('A')
    await page.getByRole('textbox', { name: 'Last Name' }).fill('D')
    await page.getByPlaceholder('name@example.com').fill('abc@gmail.com')
    // await page.getByLabel('Male').click()
    // await page.getByRole('radio', { name:'Male'}).check()
    await page.getByText('Male', { exact: true }).click()

    //caledar automation
    // await page.getByPlaceholder('Mobile Number').fill('1234567890')
    // // await page.locator('#dateOfBirthInput').fill('12 jan 2000')
    // await page.locator('#dateOfBirthInput').click();

    // await page.locator('.react-datepicker__month-select').selectOption('June');
    // await page.locator('.react-datepicker__year-select').selectOption('1995');
    // //await page.locator('[class="react-datepicker__month"]').getByText('31',{exact:true}).click()
    // await page.locator('div.react-datepicker__day--029:not(.react-datepicker__day--outside-month)').click();
    // await page.locator('#subjectsInput').fill('english')
    //await subject.click()

    const calendarInput = page.locator('#dateOfBirthInput');
    await calendarInput.click()

    let date = new Date();
    date.setDate(date.getDate() + 14)
    const expectedDay = date.getDate().toString()
    const expectedMonth = date.toLocaleDateString('en-US', { month: 'long' })
    const expectedYear = date.getFullYear().toString()

    //change year if needed
    while ((await page.locator('.react-datepicker__year-select').textContent()) !== expectedYear) {
        await page.locator('[data-name="chevron-right"]').click()
    }

    //select month
    await page.getByText('react-datepicker__month-select').click()

    //select day
    await page.locator('react-datepicker__month-select').getByText(expectedDay, { exact: true }).click()

    const expectedValue = `${date.toLocaleDateString('en-US', {
        month: 'short'
    })} ${expectedDay}, ${expectedYear}`;

    await expect(calendarInput).toHaveValue(expectedValue);
    await page.screenshot({ path: 'screenshot.png', fullPage: true})
    await page.pause()

});








