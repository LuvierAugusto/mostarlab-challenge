/// <reference types="Cypress" />
import home from '../../pages/home.js'

describe('Mall.cz Homepage Carousels Test', () => {
  beforeEach(() => {
    // Visit the mall.cz homepage
    home.visit()
  })

  it('should verify that each carousel on the homepage displays 15 unique elements', () => {
    // Get all carousels on the homepage
    home.getCategoryCarousel().each((carousel) => {
      // Expect carousel child elements to be equal to 15
      const carouselList = carousel.find('.top-icons__list > ul')
      expect(carouselList.children().length()).to.equal(15)
    })
    
    // Get all products carousel
    home.getProductsCarousel().each((carousel) => {
      // Expect carousel elements to be equal to 15
      const carouselList = carousel.find('.top-icons__list > ul')
      expect(carousel.children().length()).to.equal(15)
    })
  })
})
