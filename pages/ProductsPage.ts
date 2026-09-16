import { Page, expect } from '@playwright/test';

export class ProductsPage {

    constructor(private page: Page) {}

    // Navigate to Products page
    async openProducts() {

        // Products is a navigation link
        await this.page
            .getByRole('link', { name: 'Products' })
            .click();

        // Verify we reached Products page
        await expect(this.page).toHaveURL(/products/);
    }


    // Search for a product
    async searchProduct(productName: string) {

        // Search field: id = search_product
        await this.page
            .locator('#search_product')
            .fill(productName);

        // Click Search button
       await this.page
    .locator('#submit_search')
    .click();
    }


    // Select the first product from search results
    async selectFirstProduct() {

        // Find all View Product links
        const products = this.page
            .getByText('View Product', { exact: true });

        // Select the first search result
        await products.first().click();
    }
}