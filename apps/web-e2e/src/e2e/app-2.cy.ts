import { getGreeting } from '../support/app.po';

describe('@cypress-atomizer/web-e2e - UI Element Tests', () => {
  beforeEach(() => cy.visit('/'));

  it('should verify all navigation links are present', () => {
    cy.login('ui@test.com', 'testpass');
    
    // Check navigation menu exists
    cy.get('[role="navigation"]').should('exist');
    cy.get('[role="navigation"] ul').should('exist');
    
    // Check navigation links
    cy.get('[role="navigation"] a').should('have.length', 2);
    cy.contains('Home').should('be.visible');
    cy.contains('Page 2').should('be.visible');
    
    // Verify welcome message
    getGreeting().should('be.visible');
  });
}); 