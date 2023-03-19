/// <reference types="Cypress" />
export class home {
  static visit() {
    cy.visit('/')
  }

  static getCategoryCarousel() {
    return cy.get('.top-icons')
  }

  static getProductsCarousel() {
    return cy.get('.hooper-list')
  }
}

export default home