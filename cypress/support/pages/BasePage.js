class BasePage {
  open(path) {
    return cy.visit(path, { failOnStatusCode: false })
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
