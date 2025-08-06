import { getGreeting } from '../support/app.po';

describe('store-e2e - Responsive Design Tests', () => {
  beforeEach(() => cy.visit('/'));

  it('should display correctly on mobile viewport', () => {
    cy.login('mobile@store.com', 'mobile123');
    
    // Set mobile viewport
    cy.viewport('iphone-x');
    
    // Verify elements are still visible
    getGreeting().should('be.visible');
    cy.get('body').should('be.visible');
  });

  it('should display correctly on tablet viewport', () => {
    cy.login('tablet@store.com', 'tablet123');
    
    // Set tablet viewport
    cy.viewport('ipad-2');
    
    // Verify elements are still visible
    getGreeting().should('be.visible');
  });
});