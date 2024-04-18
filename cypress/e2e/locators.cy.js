describe('Work with basica elements', () => {
     before(() => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    }) 

    beforeEach(() => {
        cy.reload()
    })

    it('Using jquery selector', () => {
        cy.get(':nth-child(2) > :nth-child(1) > :nth-child(3) > input')
        cy.get('table#tabelaUsuarios tbody > tr:eq(0) td:nth-child(3) >input').click()
        cy.get('[onclick*=\'Francisco\']')
        cy.get('#tabelaUsuarios td:contains(\'Doutorado\'):eq(0) ~ td:eq(3) > input')
        cy.get('#tabelaUsuarios tr:contains(\'Doutorado\'):eq(0) td:eq(6) > input')
    })
})