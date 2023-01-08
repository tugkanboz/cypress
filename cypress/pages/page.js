class Page {
  open(path) {
    return cy.visit(path)
  }
}

export default Page
