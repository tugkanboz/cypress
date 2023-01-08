import Page from './page'

class HomePage extends Page {
  get itemCs() {return cy.get('.item-cs')}
  get itemExtra() {return cy.get('.item-extra')}
  get itemFlowerAndGift() {return cy.get('.js-switch-csvv-button.active')}

  open() {
    return super.open('/')
  }
}

export default new HomePage()
