/// <reference types = "cypress"/>
const { faker } = require("@faker-js/faker");

context('Funcionalidade cadastro', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });
    
    it('Deve realizar o cadastro com sucesso', () => {
        let nomeFaker = faker.person.firstName()
        let sobrenomeFaker = faker.person.lastName()
        let emailFaker = faker.internet.email(nomeFaker)
        cy.get('[name="email"]').type(emailFaker)
        cy.get('.register > :nth-child(2) > [name="password"]').type('teste@teste!')
        cy.get('[name="register"]').click()
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('[name="account_first_name"]').type(nomeFaker)
        cy.get('[name="account_last_name"]').type(sobrenomeFaker)
        cy.get('[name="save_account_details"]').click()
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    });
});