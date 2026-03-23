/// <reference types = "cypress"/>

context('Funcionalidade Produto', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('Deve adicionar produtos ao carrinho com sucesso', () => {
        var quantidade = 7
        cy.get ('[class="product-block grid"]').contains('Aether Gym Pant').click()
        cy.get('.button-variable-item-36').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('[name="quantity"]').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.woocommerce-message').should('contain', quantidade + ' × “Aether Gym Pant” foram adicionados no seu carrinho.')
    });
});

//class="product-block grid"