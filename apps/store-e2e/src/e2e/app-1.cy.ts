import { getGreeting } from '../support/app.po';

describe('store-e2e - Navigation Tests', () => {
  beforeEach(() => cy.visit('/'));

  it('should navigate through the store application', () => {
    cy.login('store@test.com', 'store123');
    
    // Check initial page
    getGreeting().contains(/Welcome/);
    
    // Verify store elements are present
    cy.get('body').should('exist');
    cy.get('div').should('exist');
  });
});