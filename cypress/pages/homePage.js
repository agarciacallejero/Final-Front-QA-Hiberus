// cypress/e2e/pages/homePage.js
class HomePage {
    

    getAddToCartButton() {
        return cy.get('button[onclick*="cart.add"]');
    }


    getCartButtonCounter() {
        return cy.get('#cart-total');
    }

    getShoppingCartLink(){
        
        return cy.get('a[title="Shopping Cart"]');
    }

    getAddIPhoneButton(){
        return cy.get('#content > div.row > div:nth-child(2) > div > div.button-group > button:nth-child(1)');
    }

    AddMackBook(){
        this.getAddIPhoneButton().click();
    }

    getAddAppleCinemaButton(){
        return cy.get('#content > div.row > div:nth-child(3) > div > div.button-group > button:nth-child(1)');
    }

    AddAppleCinema(){
        this.getAddAppleCinemaButton().click();
    }



    clickAddToCartButton() {
        this.getAddToCartButton().first().click();
    }

    clickShoppingCartLink() {
        this.getShoppingCartLink().click();
    }

    
}

module.exports = new HomePage();  