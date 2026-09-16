import { Page, expect } from '@playwright/test';

export class HomePage {

    constructor(private page: Page) {}

    // Navigate to Signup / Login
    async clickSignupLogin() {
        await this.page
            .getByText('Signup / Login')
            .click();
    }

    // Logout
    async logout() {
        await this.page
            .getByText('Logout')
            .click();
    }

    // Verify logged-in user
    async verifyLoggedInUser(userName: string) {
        await expect(
            this.page.getByText(`Logged in as ${userName}`)
        ).toBeVisible();
    }

    // Delete account
    async deleteAccount() {
        await this.page
            .getByText('Delete Account')
            .click();
    }
}