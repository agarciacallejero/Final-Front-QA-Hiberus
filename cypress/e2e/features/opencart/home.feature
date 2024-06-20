@regression
Feature: Home Page Tests

    Background:
        Given the user navigates to opencart


    Scenario: Add a product to the cart
        When The user clicks on the add to cart button of some product
        Then The shopping cart button says theres 1 item on the cart

    @smoke
    Scenario: Buying a product
        When The user clicks on the button to add the Iphone to cart
            And The user clicks on the checkout link
            And The user goes through checkout options
            And The user goes through billing details
            
            And The user goes through delivery method
            And The user goes through delivery details
            And The user goes through payment method
            And The user confirms the order
        Then The user sees a confirmation message

























