import HomePage from '../support/pages/HomePage'

describe('Homepage', () => {
  beforeEach(() => {
    HomePage.open()
  })

  it('should display flower & gift category when clicking CS item', () => {
    HomePage.clickItemCs()
    HomePage.verifyCategoryText('Çiçek & Hediye')
  })

  it('should display millions of products when clicking extra item', () => {
    HomePage.clickItemExtra()
    HomePage.verifyCategoryText('Milyonlarca Ürün')
  })
})
