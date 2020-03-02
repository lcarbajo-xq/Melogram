
/* global describe, it, cy */

describe('Melogram', function () {
    it('Functionality starting', function () {
        cy.visit('/')
    })

    it('Navigate through Categories to show photos', function() {
        cy.visit('/pet/1')
        cy.get('article')
    })

    it('Navigate from NavBar to Home', function() {
        cy.visit('/pet/1')
        cy.get('nav a').first().click()
        cy.url().should('include','/')
    })

    it('Not registered users have to fill the form when clik on favvs tab', function() {
        cy.visit('/favs')
        cy.get('form').should('have.length', 2)
    })
})