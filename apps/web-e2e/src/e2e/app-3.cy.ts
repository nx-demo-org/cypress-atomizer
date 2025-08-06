import { getGreeting } from '../support/app.po';

describe('@cypress-atomizer/web-e2e - Accessibility Tests', () => {
  beforeEach(() => cy.visit('/'));

  it('should have proper accessibility attributes', () => {
    cy.login('accessibility@test.com', 'access123');
    
    // Check for navigation role
    cy.get('[role="navigation"]').should('exist');
    
    // Check heading structure
    getGreeting().should('exist');
    
    // Check for proper link structure
    cy.get('a').each(($link) => {
      cy.wrap($link).should('have.attr', 'href');
    });
    
    // Verify page title
    cy.title().should('not.be.empty');
  });
}); 