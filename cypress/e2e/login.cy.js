import LoginPage from '../support/pages/LoginPage'

describe('Login', () => {
  beforeEach(() => {
    LoginPage.open()
  })

  it('should stay on login page with existing credentials', () => {
    cy.fixture('user').then((user) => {
      LoginPage.login(user.username, user.password)
      cy.location('pathname').should('include', 'uye-girisi')
    })
  })

  it('should show error message with wrong credentials', () => {
    cy.fixture('wrongUser').then((wrongUser) => {
      LoginPage.login(wrongUser.username, wrongUser.password)
    })
    cy.fixture('error').then((error) => {
      LoginPage.verifyErrorMessage(error.credentials)
    })
  })
})
