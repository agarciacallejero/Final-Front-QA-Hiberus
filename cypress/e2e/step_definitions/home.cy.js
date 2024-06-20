import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import homePage, { clickAddToCartButton, clickShoppingCartLink, getAddToCartButtonCounter, getCartButtonCounter } from '../../pages/homePage.js';

When('The user clicks on the add to cart button of some product', function () {

    homePage.clickAddToCartButton();

})


Then('The shopping cart button says theres 1 item on the cart', function () {
    homePage.getCartButtonCounter().should('contain.text', '1 item')
})



Given('The user clicks on the shopping cart link', function () {


    homePage.clickShoppingCartLink();

})

When('The user clicks on the button to add the Iphone to cart', function () {

    homePage.getAddIPhoneButton().click();



    homePage.getCartButtonCounter().should('contain.text', '1 item')


})


When('The user clicks on the checkout link', function () {

    cy.get('#top-links > ul > li:nth-child(5) > a').click();

})

When('The user goes through checkout options', function () {
    cy.get('#collapse-checkout-option > div > div > div:nth-child(1) > div:nth-child(4) > label > input[type=radio]').click();
    cy.get('#button-account').click();

})


When('The user goes through billing details', function () {


    cy.get('#collapse-payment-address > div').find('input[type="text"]').each(($el, index, $list) => {
        cy.wrap($el).type("texto");
    });

    cy.get('#input-payment-zone').then(($select) => {
        const $options = $select.find('option');
        const randomIndex = Math.floor(Math.random() * $options.length);
        const randomOptionValue = $options.get(randomIndex).value;
        cy.wrap($select).select(randomOptionValue);
    
        // Add validation
        cy.wrap($select).should('have.value', randomOptionValue);
    });


    cy.get('#input-payment-email').type("antonio@gmail.com");
    cy.get('#input-payment-telephone').type("666666666");
    cy.get('#input-payment-postcode').type("12345");
    cy.get('#button-guest').click();




})

When('The user goes through delivery details', function () {

    cy.get("#button-guest-shipping").click();


})

When('The user goes through delivery method', function () {

    cy.get('#collapse-shipping-address').invoke('show').should('be.visible');
    cy.get("#button-shipping-method").invoke('show').click();

})


When('The user goes through payment method', function () {
    cy.get('#collapse-payment-method > div > div.buttons > div > input[type=checkbox]:nth-child(2)').click();
    cy.get('#button-payment-method').click();


})

When('The user confirms the order', function () {

    cy.get('#button-confirm').click();
    

})


Then('The user sees a confirmation message', function () {

    cy.contains('#content > h1', 'Your order has been placed!');
    
})
















