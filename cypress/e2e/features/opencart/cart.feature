@regression
Feature: Cart Page Tests

    Background:
        Given the user navigates to opencart
        And theres at least one product in the cart
        And The user clicks on the shopping cart link



    @smoke
    Scenario: Things that user should be able to see when he goes into the cart
    Then the user should see a list of added products 
    And the user should see the product name
    And the user should see the product image
    And the user should see the product price
    And the user should see the product quantity
    And the user should see the subtotal


