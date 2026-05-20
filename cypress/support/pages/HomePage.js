import BasePage from './BasePage'

const SELECTORS = {
  itemCs: '.item-cs',
  itemExtra: '.item-extra',
  activeCategory: '.js-switch-csvv-button.active',
}

class HomePage extends BasePage {
  open() {
    return super.open('/')
  }

  clickItemCs() {
    return cy.get(SELECTORS.itemCs).click()
  }

  clickItemExtra() {
    return cy.get(SELECTORS.itemExtra).click()
  }

  getActiveCategory() {
    return cy.get(SELECTORS.activeCategory)
  }

  verifyCategoryText(expectedText) {
    return cy.get(SELECTORS.activeCategory).should('contain.text', expectedText)
  }
}

export default new HomePage()
