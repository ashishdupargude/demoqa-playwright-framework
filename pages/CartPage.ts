import {Locator,Page } from "@playwright/test";

export class Cartpage{

    readonly page: Page
    readonly backpackItemlink : Locator

    constructor(page :Page){
        this.page = page
        this.backpackItemlink = page.getByRole('link',{name: 'sauce Labs Backpack'})
    }

}