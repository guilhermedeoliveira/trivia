/// <reference types="cypress" />

context('Game Flow', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should play the game', () => {
    cy.contains('Welcome to the Trivia Challenge!')

    cy.contains(/begin/i).click()

    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/quiz')
    })

    for (var i = 0; i < 10; i++) {
      cy.contains(`${i * 10}% completed`)

      cy.get('h1[aria-label="category"]')
      cy.get('em[aria-label="difficulty"]')
      cy.get('p[aria-label="question"]')

      i % 2 === 0 ? cy.contains('true').click() : cy.contains('false').click()
    }

    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/results')
    })

    cy.contains('You scored')
    cy.contains('/')
    cy.contains('10')

    cy.get('h2[aria-label="score feedback"]')

    cy.get('li').should('have.length', 10)
  })
})
