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
    return this.clickElement(SELECTORS.itemCs)
  }

  clickItemExtra() {
    return this.clickElement(SELECTORS.itemExtra)
  }

  getActiveCategory() {
    return this.getElement(SELECTORS.activeCategory)
  }

  verifyCategoryText(expectedText) {
    return this.shouldContainText(SELECTORS.activeCategory, expectedText)
  }
}

export default new HomePage()
