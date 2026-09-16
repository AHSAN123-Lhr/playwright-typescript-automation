import { Page, expect } from '@playwright/test';

export class ProductDetailsPage {

    constructor(private page: Page) {}

    // Add currently selected product to cart
    async addToCart() {

        await this.page
            .getByText('Add to cart', { exact: true })
            .click();
    }

    // Verify product details page
async verifyProductDetails(productName: string) {

    // Verify we reached a product details page
    await expect(this.page).toHaveURL(/product_details/);

    // Verify the correct product name is displayed as a heading
    await expect(
        this.page.getByRole('heading', {
            name: productName,
            exact: true
        })
    ).toBeVisible();
}
    // Open cart from the "Added!" modal
    async viewCart() {

        await this.page
            .getByText('View Cart', { exact: true })
            .click();
    }
}