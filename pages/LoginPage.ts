import { Page, expect } from '@playwright/test';

export class LoginPage {

    constructor(private page: Page) {}

    // Verify that we are on the Login page
    async verifyLoginPage() {

        await expect(this.page).toHaveURL(/login/);

        await expect(
            this.page.getByText('New User Signup!')
        ).toBeVisible();
    }

    // Login with email and password
    async login(email: string, password: string) {

        await this.page
            .locator('input[data-qa="login-email"]')
            .fill(email);

        await this.page
            .locator('input[data-qa="login-password"]')
            .fill(password);

        await this.page
            .getByRole('button', { name: 'Login' })
            .click();
    }
}