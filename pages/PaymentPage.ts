import { Page, expect } from '@playwright/test';

export class PaymentPage {

    constructor(private page: Page) {}

    // Enter payment information
    async enterPaymentDetails() {

        await this.page
            .locator('[data-qa="name-on-card"]')
            .fill('Ahsan');

        await this.page
            .locator('[data-qa="card-number"]')
            .fill('4242424242424242');

        await this.page
            .locator('[data-qa="cvc"]')
            .fill('123');

        await this.page
            .locator('[data-qa="expiry-month"]')
            .fill('12');

        await this.page
            .locator('[data-qa="expiry-year"]')
            .fill('2030');
    }

    // Confirm payment
// Confirm payment
async payAndConfirmOrder() {

    await this.page
        .getByText('Pay and Confirm Order', { exact: true })
        .click();

    // Debug: show where Playwright ended up after payment
    console.log('URL after payment:', this.page.url());

    console.log(
        'Page text after payment:',
        await this.page.locator('body').innerText()
    );
}

    // Verify successful order
    // Verify successful order placement
// Verify successful order placement
async verifyOrderSuccess() {

    await expect(
        this.page.getByText(
            'Your order has been placed successfully!',
            { exact: true }
        )
    ).toBeVisible();
}
}