import { Given, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('the user navigates to opencart', function() {
    cy.visit('/')
})

Given('the user navigates to the cart page', function() {
    cy.visit('/index.php?route=checkout/cart')
})

Then('the url should contain {string}', function(urlContained) {
    cy.url().should('contain', urlContained)
})