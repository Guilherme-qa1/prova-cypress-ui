/// <reference types = "cypress"/>
const { faker } = require('@faker-js/faker');

context('Funcionalidade Login', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve realizar o login com sucesso', () => {
        cy.get('[name="username"]').type('aluno_ebac@teste.com')
        cy.get('.woocommerce-form > :nth-child(2) > [name="password"]').type('teste@teste.com')
        cy.get('[name="login"]').click()
        cy.get('.woocommerce-MyAccount-content').should('contain', 'editar sua senha e detalhes da conta.')
    });

    it('Deve exibir mensagem de erro ao inserir usuário inválido', () => {
        cy.get('[name="username"]').type('aluno_@teste.com')
        cy.get('.woocommerce-form > :nth-child(2) > [name="password"]').type('teste@teste.com')
        cy.get('[name="login"]').click()
        cy.get('.woocommerce-error').should('contain','Endereço de e-mail desconhecido')
    });

    it('Deve exibir mensagem de erro ao inserir senha inválida', () => {
        cy.get('[name="username"]').type('aluno_ebac@teste.com')
        cy.get('.woocommerce-form > :nth-child(2) > [name="password"]').type('@teste.com')
        cy.get('[name="login"]').click()
        cy.get('.woocommerce-error').should('contain', 'Erro: A senha fornecida para o e-mail aluno_ebac@teste.com está incorreta.')
    });

});
