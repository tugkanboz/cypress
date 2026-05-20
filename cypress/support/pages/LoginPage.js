import BasePage from './BasePage'

const SELECTORS = {
  inputUsername: '#EmailLogin',
  inputPassword: '#Password',
  buttonLogIn: '.js-login-button',
  containerError: '.modal-body',
}

class LoginPage extends BasePage {
  open() {
    return super.open('/uye-girisi')
  }

  fillCredentials(username, password) {
    cy.get(SELECTORS.inputUsername).clear().type(username)
    cy.get(SELECTORS.inputPassword).clear().type(password, { log: false })
  }

  submit() {
    return cy.get(SELECTORS.buttonLogIn).click()
  }

  login(username, password) {
    this.fillCredentials(username, password)
    return this.submit()
  }

  loginAs(user, { cacheSession = true } = {}) {
    const setup = () => {
      this.open()
      this.login(user.username, user.password)
      cy.location('pathname').should('not.include', 'uye-girisi')
    }
    if (!cacheSession) {
      return setup()
    }
    return cy.session(['login', user.username], setup, {
      validate: () => cy.getCookies().should('not.be.empty'),
      cacheAcrossSpecs: true,
    })
  }

  getErrorContainer() {
    return cy.get(SELECTORS.containerError)
  }

  verifyErrorMessage(expectedMessage) {
    return cy.get(SELECTORS.containerError).should('contain.text', expectedMessage)
  }
}

export default new LoginPage()
