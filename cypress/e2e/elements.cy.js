/// <reference types = "cypress" />

describe('Work with basica elements', () => {
    /* before(() => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    }) */

    beforeEach(() => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
        cy.reload();
    }) 
    it('Text', () => {
        cy.get('body').should('contain', 'Cuidado');
        cy.get('.facilAchar').should('contain', 'Cuidado');
        cy.get('.facilAchar').should('have.text', 'Cuidado onde clica, muitas armadilhas...');
    })

    it('Links', () => {
        cy.get('[href="#"]').click();
        cy.get('#resultado').should('have.text', 'Voltou!');

        cy.reload()
        cy.get('#resultado').should('have.not.text', 'Voltou!');
        cy.contains('Voltar').click();
        cy.get('#resultado').should('have.text', 'Voltou!')
    })

    it('TextFields', () => {
        cy.get('#formNome').type('Diana');
        cy.get('#formNome').should('have.value', 'Diana'); //Interagir com text field

        cy.get('#elementosForm\\:sugestoes')
        .type('Área de texto')
        .should('have.value', 'Área de texto');

        cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input')
        .type('Escolaridade?');

        cy.get('[data-cy=dataSobrenome]').type('Alves45{backspace}{backspace}') //Teclas especiais
        .should('have.value', 'Alves');

        cy.get('#elementosForm\\:sugestoes')
            .clear() //Limpar a tela
            .type('Erro{selectall}acerto', {delay: 100}) //Delay
            .should('have.value', 'acerto');
    })

    it('RadioButton', () => {
        cy.get('#formSexoFem')
            .click()
            .should('be.checked'); 

        cy.get('#formSexoMasc')
            .should('not.be.checked');
        cy.get("[name=formSexo]")
            .should('have.length', 2);
    })

    it('Checkbox', () => {
        cy.get('#formComidaPizza')
        .click()
        .should('be.checked')

        cy.get('[name=formComidaFavorita]').click({multiple: true});
        cy.get('#formComidaPizza').should('not.be.checked');
        cy.get('#formComidaVegetariana').should('be.checked');
    })

    it('Combo', () => {
        cy.get('[data-test=dataEscolaridade]')
            .select('Superior')
            .should('have.value', 'superior');
        
            cy.get('[data-test=dataEscolaridade]')
                .select('2o grau completo')
                .should('have.value', '2graucomp');

            cy.get('[data-test=dataEscolaridade] option')
                .should('have.length', 8)
                cy.get('[data-test=dataEscolaridade] option').then($arr => {
                    const values = []
                    $arr.each(function() {
                        values.push(this.innerHTML)
                    })
                    expect(values).to.include.members(["Superior", "Mestrado"])
                })

    })

    it.only('Combo multiplo', () => {
        cy.get('[data-testid=dataEsportes]')
            .select(['natacao', 'Corrida', 'nada'])

        cy.get('[data-testid=dataEsportes]').then($el => {
            expect($el.val()).to.be.deep.equal(['natacao', 'Corrida', 'nada'])
            expect($el.val()).to.have.length(3)
        })

        cy.get('[data-testid=dataEsportes]').invoke('val').should('eql', ['natacao', 'Corrida', 'nada'])

    })
})
