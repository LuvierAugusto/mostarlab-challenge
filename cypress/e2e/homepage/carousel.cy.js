/// <reference types="Cypress" />
import home from '../../pages/home.js'

describe('Mall.cz Homepage Carousels Test', () => {
  beforeEach(() => {
    // Visit the mall.cz homepage
    home.visit()
  })

  it('should verify that each carousel on the homepage displays 15 unique elements', () => {
    // Get all carousels on the homepage
    home.getTopIconsCarousel().each((carousel) => {
      expect(carousel.children().length()).to.equal(15)
    })

    home.getAllProductsCarousel().each((carousel) => {
      expect(carousel.children().length()).to.equal(15)
    })
  })
})
