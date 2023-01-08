import LoginPage from '../pages/login.page'
import user from '../fixtures/user.json'
import error from '../fixtures/error.json'

describe('Login', () => {
  beforeEach(() => {
    LoginPage.open()
  })

  it('With existing credentials', () => {
    LoginPage.logIn(user.username, user.password)
    cy.location('pathname')
      .should('include', 'uye-girisi')
  })

  it('With wrong credentials', () => {
    LoginPage.logIn('foo@test.com', 'bar')
    LoginPage.containerError
      .should('have.text', error.credentials)
  })
})