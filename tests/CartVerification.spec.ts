import {test} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'

test('verification of cart', async ({ page}) => {

const loginPageObj = new LoginPage (page)

await loginPageObj.openApplication()
await loginPageObj.login('standard_user','secret_sauce')


})