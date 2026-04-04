Cypress.Commands.add('login', (username, password) => {
  cy.get('#EmailLogin').clear().type(username)
  cy.get('#Password').clear().type(password)
  cy.get('.js-login-button').click()
})
