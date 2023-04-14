describe('template spec', () => {
  beforeEach(() => {
    cy.visit('localhost:3000/register')
  })
  it('checks for each input field in the form', () => {
    cy.get("form").should('exist').should('be.visible').should('have.length', 2)
    cy.get("input").should('exist').should('be.visible').should('have.length', 7)
    cy.get("button").should('exist').should('be.visible').should('have.length', 2)

  })
  it('registers a new account and logs out', () => {
    cy.get('label ').click();
    cy.get('input[name=reg-name]').should('exist').should('be.visible')
    cy.get('input[name=reg-email]').should('exist').should('be.visible')
    cy.get('input[name=reg-password]').should('exist').should('be.visible')
    cy.get('input[name=reg-password-confirmation]').should('exist').should('be.visible')
    cy.get('input[name=reg-name]').type('cypressUser')
    cy.get('input[name=reg-email]').type('cypress@gmail.com')
    cy.get('input[name=reg-password]').type('cypress')
    cy.get('input[name=reg-password-confirmation]').type('cypress')
    cy.get('button[name=reg-btn]').click()
    cy.url().should('include', '/protected')
    cy.get('button[name=logout-btn]').click()


  })

})