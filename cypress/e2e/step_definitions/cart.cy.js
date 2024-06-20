import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import cartPage, { getProductList } from '../../pages/cartPage.js';
import homePage from '../../pages/homePage.js';



Given('theres at least one product in the cart', function() {
    homePage.clickAddToCartButton();
})


Then('the user should see a list of added products', function() {
    cartPage.getProductList().should('be.visible');
})

Then('the user should see the product name', function() {
    cartPage.getProductName().should('exist');
})

Then('the user should see the product image', function() {
    cartPage.getProductImage().should('be.visible');
})

Then('the user should see the product price', function() {
    cartPage.getProductPrice().should('be.visible');
})

Then('the user should see the product quantity', function() {
    cartPage.getProductQuantity().should('be.visible');
})

Then('the user should see the subtotal', function() {
    cartPage.getProductSubTotal().should('be.visible');
})



