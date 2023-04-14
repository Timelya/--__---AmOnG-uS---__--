describe('template spec', () => {
  it('Visits the homepage of the website', () => {
    cy.visit('localhost:3000')
    cy.contains('Eventcard')
  })

})