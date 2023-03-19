/// <reference types="Cypress" />
export class home {
  static visit() {
    cy.visit('/')
  }

  static getTopIconsCarousel() {
    return cy.get('.top-icons')
  }

  static getTopIconsItemsCarouse() {
    return cy.get('.top-icons__list > li')
  }

  static getAllProductsCarousel() {
    return cy.get('.hooper-list')
  }

  static getAllProductsListCarousel() {
    return cy.get('.hooper-track > li')
  }


}

export default home