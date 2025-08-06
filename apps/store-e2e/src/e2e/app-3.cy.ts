import { getGreeting } from '../support/app.po';

describe('store-e2e - Accessibility Tests', () => {
  beforeEach(() => cy.visit('/'));

  it('should have proper accessibility structure', () => {
    cy.login('access@store.com', 'access123');
    
    // Check for proper HTML structure
    cy.get('html').should('exist');
    cy.get('head').should('exist');
    cy.get('body').should('exist');
    
    // Verify welcome message exists
    getGreeting().should('exist');
  });
});