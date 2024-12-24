describe('template spec', () => {
    it('it displays remaining charecter appropriately', () => {
      cy.visit('http://localhost:5173/example-3')
      cy.get('#first-name-input').as('fnInput')
      cy.get('@fnInput').type('hello')
      cy.get('span[data-cy=first-name-chars-left-count]').invoke('text').as('charsleft')


      cy.get('@charsleft').should('equals','10')


    })
  })