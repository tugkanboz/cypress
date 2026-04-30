import HomePage from '../support/pages/HomePage'

describe('Homepage', () => {
  beforeEach(() => {
    cy.fixture('home').as('homeData')
    HomePage.open()
  })

  it('should display flower & gift category when clicking CS item', function () {
    HomePage.clickItemCs()
    HomePage.verifyCategoryText(this.homeData.categories.csItem)
  })

  it('should display millions of products when clicking extra item', function () {
    HomePage.clickItemExtra()
    HomePage.verifyCategoryText(this.homeData.categories.extraItem)
  })
})
