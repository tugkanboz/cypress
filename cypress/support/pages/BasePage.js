class BasePage {
  open(path, options = {}) {
    return cy.visit(path, options)
  }
}

export default BasePage
