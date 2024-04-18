/// <reference types="cypress" />

describe('Time test', () => {
    beforeEach(() => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })

    it('Going back to the past', () => {
        cy.get('#buttonNow').click()
        cy.get('#resultado > span').should('contain', '06/04/2024')

        /*cy.clock()
        cy.get('#buttonNow').click()
        cy.get('#resultado > span').should('contain', '31/12/1969')*/

        const dt = new Date(2001, 7, 27, 17, 40, 50)
        cy.clock(dt.getTime())
        cy.get('#buttonNow').click()
        cy.get('#resultado > span').should('contain', '27/08/2001')
    })

    it('Goes to the future', () => {
        cy.get('#buttonTimePassed').click()
        cy.get('#resultado > span').should('contain', '1712')
        //cy.get('#resultado > span').invoke('text').should('gt', 1712381123601)

        cy.clock()
        cy.get('#buttonTimePassed').click()
        cy.get('#resultado > span').invoke('text').should('lte', 0)
    })
})