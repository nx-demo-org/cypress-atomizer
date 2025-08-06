import { getGreeting } from '../support/app.po';

describe('@cypress-atomizer/web-e2e - Responsive Design Tests', () => {
  beforeEach(() => cy.visit('/'));

  it('should display correctly on mobile viewport', () => {
    cy.login('mobile@test.com', 'mobile123');
    
    // Set mobile viewport
    cy.viewport('iphone-x');
    
    // Verify elements are still visible
    getGreeting().should('be.visible');
    cy.get('[role="navigation"]').should('be.visible');
    cy.contains('Home').should('be.visible');
    cy.contains('Page 2').should('be.visible');
  });

  it('should display correctly on tablet viewport', () => {
    cy.login('tablet@test.com', 'tablet123');
    
    // Set tablet viewport
    cy.viewport('ipad-2');
    
    // Verify elements are still visible
    getGreeting().should('be.visible');
    cy.get('[role="navigation"]').should('be.visible');
  });
}); 