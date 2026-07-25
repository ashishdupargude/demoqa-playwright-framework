import { expect, test } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { HomePage } from '../pages/HomePage'
import { Cartpage } from '../pages/CartPage'

test('verification of cart', async ({ page }) => {

    const loginPageObj = new LoginPage(page)

    await loginPageObj.openApplication()
    await loginPageObj.login('standard_user', 'secret_sauce')

    const HomePageObj = new HomePage(page)
    await expect(HomePageObj.homePageHeading).toHaveText("Swag Labs")
    await HomePageObj.backPackAddToCart()
    await expect(HomePageObj.cartIcon).toHaveText("1")

    await expect(HomePageObj.backpackRemoveButton).toBeVisible()
    await HomePageObj.gotocart()
    const cartPageObj = new Cartpage(page)
    await expect(cartPageObj.backpackItemlink).toHaveText('Sauce Labs Backpack')

})