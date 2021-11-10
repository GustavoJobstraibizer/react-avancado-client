// load type definitions that come with Cypress module

/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to visit google page
     * @example cy.google()
     */
    google(): Chainable<Window>
    /**
     * Custom command to check banners in page
     * @example cy.shouldRenderBanner()
     */
    shouldRenderBanner(): Chainable<Element>
  }
}
