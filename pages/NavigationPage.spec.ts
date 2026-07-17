import { Locator, Page } from '@playwright/test'

export class NavigationPage {

    readonly page: Page
    formLayoutMenuItem: Locator
    datePickerMenuItem: Locator
    smartTableMenuItem: Locator
    tostrMenuItem: Locator
    tooltipMenuItem: Locator

    constructor(page: Page) {

        this.page = page
        this.formLayoutMenuItem = this.page.getByRole('link', { name: 'Form Layouts' })
        this.datePickerMenuItem = this.page.getByRole('link', { name: 'Datepicker' })
        this.smartTableMenuItem = this.page.getByRole('link', { name: 'Smart Table' })
        this.tostrMenuItem = this.page.getByRole('link', { name: 'Toastr' })
        this.tooltipMenuItem = this.page.getByRole('link', { name: 'Tooltip' })


    }

    async FromLayoutsPage() {

        await this.selectGroupMenuItem('Forms')
        // await this.page.getByText('Forms').click()
        await this.formLayoutMenuItem.click()
    }
    async datePickerPage() {

        await this.selectGroupMenuItem('Forms')
        //await this.page.getByText('Forms').click()
        await this.page.getByRole('link', { name: 'Datepicker' }).click()
    }
    async smartTablePage() {

        await this.selectGroupMenuItem('Tables & Data')

        //await this.page.getByText('Tables & Data').click()
        await this.smartTableMenuItem.click()
    }
    async tostrPage() {

        await this.selectGroupMenuItem('Modal & Overlays')
        //await this.page.getByText('Modal & Overlays').click()
        await this.tostrMenuItem.click()
    }
    async tooltipPage() {

        await this.selectGroupMenuItem('Modal & Overlays')
        //await this.page.getByText('Model & Overlays').click()
        await this.tooltipMenuItem.click()
    }

    private async selectGroupMenuItem(groupItemTitle: string) {
        const groupMenuItem = this.page.getByTitle(groupItemTitle)
        const expandedState = await groupMenuItem.getAttribute('aria-expanded')

        if (expandedState === "false") {
            await groupMenuItem.click()
        }

    }

}