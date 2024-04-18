/// <reference types="cypress" />

describe('Dinamic tests', () => {
    before(() => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })

    const foods = ['Carne', 'Frango', 'Pizza', 'Vegetariano']
    foods.forEach(food => {
        it('Cadastro com comida variada', () => {
            cy.get('#formNome').type('Usuario')
            cy.get('[data-cy="dataSobrenome"]').type('Dinâmico')
            cy.get(`[name=formSexo][value=F]`).click()
            cy.get('#formComidaCarne').click()
            cy.get('[data-test="dataEscolaridade"]').select('Doutorado')
            cy.get('#formEsportes').select('Corrida')
            cy.get('#formCadastrar').click()
            cy.get('#resultado > :nth-child(1)').should('contain', 'Cadastrado!')
        })
    })

    it.only('Deve selecionar todos usando o each', () => {
        cy.get('#formNome').type('Usuario')
        cy.get('[data-cy="dataSobrenome"]').type('Dinâmico')
        cy.get(`[name=formSexo][value=F]`).click()

        cy.get('[name=formComidaFavorita]').each($el => {
            if($el.val() != 'vegetariano')
                cy.wrap($el).click()
        })

        cy.get('[data-test="dataEscolaridade"]').select('Doutorado')
        cy.get('#formEsportes').select('Corrida')
        cy.get('#formCadastrar').click()
        cy.get('#resultado > :nth-child(1)').should('contain', 'Cadastrado!')
        //cy.clickAlert('#formCadastrar', 'Tem certeza que voce eh vegetariano?')
    })
    
})