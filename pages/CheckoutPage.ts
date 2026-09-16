import { Page, expect } from '@playwright/test';

export class CheckoutPage {

    constructor(private page: Page) {}

    // Verify checkout page
    async verifyCheckoutPage() {

        await expect(
            this.page.getByText('Address Details', { exact: true })
        ).toBeVisible();

        await expect(
            this.page.getByText('Review Your Order', { exact: true })
        ).toBeVisible();
    }

    // Verify delivery address
// Verify delivery address section
async verifyDeliveryAddress() {

    await expect(
        this.page.getByRole('heading', {
            name: 'Your delivery address',
            exact: true
        })
    ).toBeVisible();
}

// Verify billing address section
async verifyBillingAddress() {

    await expect(
        this.page.getByRole('heading', {
            name: 'Your billing address',
            exact: true
        })
    ).toBeVisible();
}
    // Add order comment
    async addOrderComment(comment: string) {

        await this.page
            .locator('textarea.form-control')
            .fill(comment);
    }

    // Place order
    async placeOrder() {

        await this.page
            .getByText('Place Order', { exact: true })
            .click();
    }
}