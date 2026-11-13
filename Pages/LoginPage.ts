import { Page } from '@playwright/test';
export class LoginPage {
    page:Page
    constructor(page:Page ) {
        this.page = page;
    }
    async login(username: string, password: string) {
        await this.page.goto('https://parabank.parasoft.com/parabank/overview.htm');
        await this.page.locator('input[name="username"]').fill(username);
        await this.page.locator('input[name="password"]').fill(password);
        await this.page.locator('input[value="Log In"]').click();
    }
}