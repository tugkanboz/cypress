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

  login(username, password) {
    this.typeText(SELECTORS.inputUsername, username)
    this.typeText(SELECTORS.inputPassword, password)
    return this.clickElement(SELECTORS.buttonLogIn)
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
    return this.getElement(SELECTORS.containerError)
  }

  verifyErrorMessage(expectedMessage) {
    return this.shouldContainText(SELECTORS.containerError, expectedMessage)
  }
}

export default new LoginPage()
