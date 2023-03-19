/// <reference types="Cypress" />
import home from '../../pages/home.js'

describe('Mall.cz Homepage Carousels Test', () => {
  beforeEach(() => {
    // Visit the mall.cz homepage
    home.visit()
  })

  it('should verify that each carousel on the homepage displays 15 unique elements', () => {
    // Get all category carousels on the homepage
    // Loop through every carousel found
    home.getCategoryCarousel().each((carousel) => {
      // Find inside the carousel the list of items
      const carouselList = carousel.find('.top-icons__list > ul')
      // Expect carousel child elements to be equal to 15
      carouselList
        .children()
        .should('have.length', 15)
        .then(() => {
          cy.log('Carousel has exactly 15 elements')
        })
    })

    // Get all products carousel
    // Loop through every carousel found
    home.getProductsCarousel().each((carousel) => {
      // Find inside the carousel the list of items
      const carouselList = carousel.find('.top-icons__list > ul')
      // Expect carousel child elements to be equal to 15
      carouselList
        .children()
        .should('have.length', 15)
        .then(() => {
          cy.log('Carousel has exactly 15 elements')
        })
    })
  })
})
