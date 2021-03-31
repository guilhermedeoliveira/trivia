/// <reference types="cypress" />

context('Game Flow', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('should play the game', () => {
    cy.contains('Trivia Game!')

    for (var i = 0; i < 10; i++) {
      cy.contains(`${i * 10}% completed`)

      cy.get('h1[aria-label="category"]')
      cy.get('em[aria-label="difficulty"]')
      cy.get('p[aria-label="question"]')

      i % 2 === 0 ? cy.contains('true').click() : cy.contains('false').click()
    }

    cy.url().should('eq', 'http://localhost:3000/results')

    cy.contains('You scored')
    cy.contains('/')
    cy.contains('10')

    cy.get('h2[aria-label="score feedback"]')

    cy.get('li').should('have.length', 10)
  })
})
