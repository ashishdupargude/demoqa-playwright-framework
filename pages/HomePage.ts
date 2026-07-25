import { Locator, Page } from "@playwright/test";
class HomePage {

    readonly page: Page
    readonly homePageHeading : Locator
    readonly backPacAddToCartButton: Locator
    readonly backpackRemoveButton: Locator
    readonly cartIcon: Locator

    constructor(page: Page) {
        this.page = page
          this.homePageHeading = page.locator('.app_logo')
        this.backPacAddToCartButton = page.locator('#add-to-cart-sauce-labs-backpack')
        this.backpackRemoveButton = page.locator('#remove-sauce-labs-backpack')
        this.cartIcon = page.locator('#shopping_cart_container')
      

    }



}