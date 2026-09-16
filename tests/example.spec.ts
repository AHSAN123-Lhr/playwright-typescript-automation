import { test, expect } from '@playwright/test';
import { generateUserData, userData } from '../test-data/userData';

import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { SignupPage } from '../pages/SignupPage';
import { ProductsPage } from '../pages/ProductsPage'; // NEW
//import { ProductsPage } from '../pages/ProductsPage';
import { ProductDetailsPage } from '../pages/ProductDetailPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { PaymentPage } from '../pages/PaymentPage';

test('Register a new user successfully', async ({ page }) => {

    // ==================================================
    // 1. Create Page Object instances
    // ==================================================

    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    const signupPage = new SignupPage(page);
    const productsPage = new ProductsPage(page); // NEW
test.setTimeout(120000); // 2 minutes for this complete E2E flow


const productDetailsPage = new ProductDetailsPage(page);
const cartPage = new CartPage(page);
const checkoutPage = new CheckoutPage(page);
const paymentPage = new PaymentPage(page);
    // ==================================================
    // 2. Open Automation Exercise
    // ==================================================

    await page.goto('https://automationexercise.com/');


    // ==================================================
    // 3. Navigate to Signup / Login
    // ==================================================

    await homePage.clickSignupLogin();


    // ==================================================
    // 4. Verify Login/Signup page
    // ==================================================

    await loginPage.verifyLoginPage();


    // ==================================================
    // 5. Generate unique test data
    // ==================================================

    const user = generateUserData();


    // ==================================================
    // 6. Enter name and email
    // ==================================================

    await signupPage.registerNewUser(user.name, user.email);


    // ==================================================
    // 7. Fill Account Information
    // ==================================================

    await signupPage.fillAccountInformation(user, userData);


    // ==================================================
    // 8. Create Account
    // ==================================================

    await page
        .getByRole('button', { name: 'Create Account' })
        .click();


    // ==================================================
    // 9. Verify Account Created
    // ==================================================

    await expect(
        page.getByText('Account Created!')
    ).toBeVisible();


    // ==================================================
    // 10. Continue to Home Page
    // ==================================================

    await page
        .getByRole('link', { name: 'Continue' })
        .click();


    // ==================================================
    // 11. Verify User is Logged In
    // ==================================================

    await homePage.verifyLoggedInUser(user.name);


    // ==================================================
    // 12. Logout
    // ==================================================

    await homePage.logout();


    // ==================================================
    // 13. Verify Logout
    // ==================================================

    await expect(page).toHaveURL(/login/);


    // ==================================================
    // 14. Login with Same User
    // ==================================================

    await loginPage.login(user.email, user.password);


    // ==================================================
    // 15. Verify Login Successful
    // ==================================================

    await homePage.verifyLoggedInUser(user.name);


    // ==================================================
    // 16. Go to Products
    // ==================================================

    await productsPage.openProducts();


    // ==================================================
    // 17. Search for Fancy
    // ==================================================

    await productsPage.searchProduct('Fancy');


    // ==================================================
    // 18. Select First Product
    // ==================================================

    
// ==================================================
// 16. Go to Products
// ==================================================

await productsPage.openProducts();


// ==================================================
// 17. Search for Fancy
// ==================================================

await productsPage.searchProduct('Fancy');


// ==================================================
// 18. Select First Product
// ==================================================

await productsPage.selectFirstProduct();


// ==================================================
// 19. Verify Product Details
// ==================================================

await productDetailsPage.verifyProductDetails('Fancy Green Top');


// ==================================================
// 20. Add Product to Cart
// ==================================================

await productDetailsPage.addToCart();


// ==================================================
// 21. Open Cart
// ==================================================

await productDetailsPage.viewCart();


// ==================================================
// 22. Verify Product in Cart
// ==================================================

await cartPage.verifyProduct('Fancy Green Top');


// ==================================================
// 23. Proceed to Checkout
// ==================================================

await cartPage.proceedToCheckout();


// ==================================================
// 24. Verify Checkout Page
// ==================================================

await checkoutPage.verifyCheckoutPage();


// ==================================================
// 25. Verify Delivery Address
// ==================================================

await checkoutPage.verifyDeliveryAddress();


// ==================================================
// 26. Verify Billing Address
// ==================================================

await checkoutPage.verifyBillingAddress();


// ==================================================
// 27. Add Order Comment
// ==================================================

await checkoutPage.addOrderComment(
    'Please deliver the order carefully.'
);


// ==================================================
// 28. Place Order
// ==================================================

await checkoutPage.placeOrder();


// ==================================================
// 29. Enter Payment Details
// ==================================================

await paymentPage.enterPaymentDetails();


// ==================================================
// 30. Confirm Payment
// ==================================================

await paymentPage.payAndConfirmOrder();


// ==================================================
// 31. Verify Order Success
// ==================================================

//await paymentPage.verifyOrderSuccess();

    // ==================================================
    // 19. Delete Account
    // ==================================================

    console.log('URL after Delete Account:', page.url());
    await homePage.deleteAccount();


    // ==================================================
    // 20. Verify Account Deleted
    // ==================================================

    await expect(
        page.getByText('Account Deleted!')
    ).toBeVisible();

});