class CartPage {

    getProductList() {
        return cy.get('form table').first();

    }


    getProductName() {
        return cy.get('a[href*="product&product"]').first();
    }

    getProductImage() {
        return cy.get('form .table-responsive .img-thumbnail').first();
    }

    getProductPrice() {
        return cy.get('#content > form > div > table > tbody > tr > td:nth-child(5)').first();
           
    }


    getProductQuantity() {

        return cy.get('#content > form > div > table > tbody > tr > td:nth-child(4) > div > input').first();

    }


    getProductSubTotal() {

        return cy.get('#content > div.row > div > table > tbody > tr:nth-child(1) > td:nth-child(2)');

    }




    clickAddToCartButton() {
        this.getAddToCartButton().first().click();
    }

    clickShoppingCartLink() {
        this.getShoppingCartLink().click();
    }
}

module.exports = new CartPage();  