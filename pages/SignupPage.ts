import { Page, expect } from '@playwright/test';

export class SignupPage {

    constructor(private page: Page) {}

    // Register a new user
    async registerNewUser(name: string, email: string) {

        await this.page
            .getByPlaceholder('Name')
            .fill(name);

        await this.page
            .locator('input[data-qa="signup-email"]')
            .fill(email);

        await this.page
            .getByRole('button', { name: 'Signup' })
            .click();

        await expect(
            this.page.getByText('Enter Account Information')
        ).toBeVisible();
    }

    // Fill account information
    async fillAccountInformation(user: any, userData: any) {

        await this.page
            .getByLabel(userData.title)
            .check();

        await this.page
            .getByLabel('Password *')
            .fill(user.password);

        await this.page
            .locator('#days')
            .selectOption(userData.day);

        await this.page
            .locator('#months')
            .selectOption(userData.month);

        await this.page
            .locator('#years')
            .selectOption(userData.year);

        await this.page
            .getByLabel('Sign up for our newsletter!')
            .check();

        await this.page
            .getByLabel('Receive special offers from our partners')
            .check();

        await this.page
            .getByLabel('First name *')
            .fill(userData.firstName);

        await this.page
            .getByLabel('Last name *')
            .fill(userData.lastName);

        await this.page
            .getByLabel('Company', { exact: true })
            .fill(userData.company);

        await this.page
            .getByLabel(
                'Address * (Street address, P.O. Box, Company name, etc.)'
            )
            .fill(userData.address);

        await this.page
            .getByLabel('Address 2')
            .fill(userData.address2);

        await this.page
            .selectOption('#country', { label: userData.country });

        await this.page
            .locator('[data-qa="state"]')
            .fill(userData.state);

        await this.page
            .locator('[data-qa="city"]')
            .fill(userData.city);

        await this.page
            .locator('[data-qa="zipcode"]')
            .fill(userData.zipcode);

        await this.page
            .locator('[data-qa="mobile_number"]')
            .fill(userData.mobile);
    }
}