import HomePage from '../pages/home.page'

describe('Homepage', () => {
  beforeEach(() => {
    HomePage.open()
  })

  it('Check homepage flower item', () => {
    HomePage.itemCs.click();
    HomePage.itemFlowerAndGift.contains('Çiçek & Hediye')
  })

  it('Check homepage extra item', () => {
    HomePage.itemExtra.click();
    HomePage.itemFlowerAndGift.contains('Milyonlarca Ürün')
  })  
})
