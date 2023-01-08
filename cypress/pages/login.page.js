import Page from './page'

class LoginPage extends Page {
  get inputUsername() {return cy.get('#EmailLogin')}
  get inputPassword() {return cy.get('#Password')}
  get buttonLogIn() {return cy.get('.js-login-button')}
  get containerError() {return cy.get('.modal-body')}

  open() {
    return super.open('/uye-girisi')
  }

  logIn(username, password) {
    this.inputUsername.type(username)
    this.inputPassword.type(password)
    this.buttonLogIn.click()
  }
}

export default new LoginPage()
