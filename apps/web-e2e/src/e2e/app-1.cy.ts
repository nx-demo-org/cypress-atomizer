import { getGreeting } from '../support/app.po';

describe('@cypress-atomizer/web-e2e - Navigation Tests', () => {
  beforeEach(() => cy.visit('/'));

  it('should navigate to page 2 and back', () => {
    cy.login('test@example.com', 'password123');
    
    // Check initial page
    getGreeting().contains(/Welcome/);
    
    // Navigate to page 2
    cy.contains('Page 2').click();
    cy.url().should('include', '/page-2');
    cy.contains('Click here to go back to root page');
    
    // Navigate back to home
    cy.contains('Click here to go back to root page').click();
    cy.url().should('eq', Cypress.config().baseUrl + '/');
    getGreeting().contains(/Welcome/);
  });
}); 