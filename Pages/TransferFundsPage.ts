import { Page } from "@playwright/test";
export class TransferFundsPage {
    page:Page
    constructor(page: Page) {
        this.page = page;
    }
    async transferFunds(amount: string, fromAccount: string, toAccount: string) {
       await this.page.locator('#amount').fill(amount)
        await this.page.locator('#fromAccountId').selectOption(fromAccount)
        await this.page.locator('#toAccountId').selectOption(toAccount)
        await this.page.locator('input[value="Transfer"]').click()
    }
}