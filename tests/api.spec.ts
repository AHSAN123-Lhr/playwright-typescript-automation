import { test, expect } from '@playwright/test';

test.beforeEach(async () => {

    console.log('--- Starting API test ---');

});


test('Get products list', async ({ request }) => {

    // Send GET request to products API
    const response = await request.get(
        'https://automationexercise.com/api/productsList'
    );

    // Verify HTTP status code
    expect(response.status()).toBe(200);

    // Convert response body into JSON
    const responseBody = await response.json();

    // Verify API response code
    expect(responseBody.responseCode).toBe(200);

    // Verify products array exists
    expect(responseBody.products).toBeDefined();

    // Verify at least one product exists
    expect(responseBody.products.length).toBeGreaterThan(0);

    // Find Fancy Green Top from the response
    const product = responseBody.products.find(
        (product: any) => product.name === 'Fancy Green Top'
    );

    // Verify Fancy Green Top exists
    expect(product).toBeDefined();

    // Verify product details
    expect(product.price).toBe('Rs. 700');
    expect(product.brand).toBe('Polo');
});


test('Verify login API', async ({ request }) => {

    // Send POST request to login API
    const response = await request.post(
        'https://automationexercise.com/api/verifyLogin',
        {
            form: {
                email: 'test@example.com',
                password: 'test123'
            }
        }
    );

    // Get response body as JSON
    const responseBody = await response.json();

    // Print response
    console.log(responseBody);

    // Verify API responded
    expect(response.status()).toBe(200);
});