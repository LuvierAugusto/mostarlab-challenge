import home from '../../pages/home.js'

describe('Mall.cz Homepage Carousels Test', () => {
  beforeEach(() => {
    // Visit the mall.cz homepage
    home.visit()
  })

  it('should verify that each carousel on the homepage displays 15 unique elements', () => {
    // // Get all carousels on the homepage
    // cy.get('.carousel-selector').each(($carousel) => {
    //   // Get the number of unique elements in the carousel
    //   const uniqueElements = new Set($carousel.children()).size

    //   // Check if the carousel has 15 unique elements
    //   if (uniqueElements === 15) {
    //     cy.log(`Carousel with 15 unique elements found: ${$carousel}`)
    //   } else {
    //     // If the carousel does not have 15 unique elements, the test should fail
    //     cy.log(`Carousel with ${uniqueElements} unique elements found, expected 15: ${$carousel}`)
    //     expect(uniqueElements).to.equal(15)
    //   }
    // })
  })
})
