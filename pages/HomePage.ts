import { Locator, Page } from "@playwright/test";
export class HomePage {

    readonly page: Page
    readonly homePageHeading: Locator
    readonly backPackAddToCartButton: Locator
    readonly backpackRemoveButton: Locator
    readonly cartIcon: Locator

    constructor(page: Page) {
        this.page = page
        this.homePageHeading = page.locator('.app_logo')
        this.backPackAddToCartButton = page.locator('#add-to-cart-sauce-labs-backpack')
        this.backpackRemoveButton = page.locator('#remove-sauce-labs-backpack')
        this.cartIcon = page.locator('#shopping_cart_container')

    }

    async backPackAddToCart() {
        await this.backPackAddToCartButton.click()

    }

    async gotocart() {
        await this.cartIcon.click()

    }



}