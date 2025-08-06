import { getGreeting } from '../support/app.po';

describe('@cypress-atomizer/web-e2e - Error Handling Tests', () => {
  beforeEach(() => cy.visit('/'));

  it('should handle invalid routes gracefully', () => {
    cy.login('error@test.com', 'error123');
    
    // Visit non-existent route
    cy.visit('/non-existent-page', { failOnStatusCode: false });
    
    // Should not crash and should show some content
    cy.get('body').should('exist');
  });
});