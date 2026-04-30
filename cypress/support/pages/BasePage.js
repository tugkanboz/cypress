class BasePage {
  open(path, options = {}) {
    return cy.visit(path, options)
  }

  getElement(selector, options = {}) {
    return cy.get(selector, options)
  }

  clickElement(selector) {
    return this.getElement(selector).click()
  }

  typeText(selector, text) {
    return this.getElement(selector).clear().type(text)
  }

  shouldContainText(selector, text) {
    return this.getElement(selector).should('contain.text', text)
  }

  shouldBeVisible(selector) {
    return this.getElement(selector).should('be.visible')
  }
}

export default BasePage
