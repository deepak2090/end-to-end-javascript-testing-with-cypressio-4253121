describe('template spec', () => {
    it('it displays remaining charecter appropriately', () => {
      cy.visit('http://localhost:5173/example-2')
      cy.get('span').invoke('text').should('equal','15')
    })
  })