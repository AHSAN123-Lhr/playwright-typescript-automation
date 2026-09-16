import { Page, expect } from '@playwright/test';

export class CartPage {

    constructor(private page: Page) {}

    // Verify selected product is present in cart
    async verifyProduct(productName: string) {

        await expect(
            this.page.getByText(productName, { exact: true })
        ).toBeVisible();
    }

    // Proceed to checkout
    async proceedToCheckout() {

        await this.page
            .getByText('Proceed To Checkout', { exact: true })
            .click();
    }
}