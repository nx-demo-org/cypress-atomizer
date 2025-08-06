import { getGreeting } from '../support/app.po';

describe('store-e2e - UI Element Tests', () => {
  beforeEach(() => cy.visit('/'));

  it('should verify all UI elements are present', () => {
    cy.login('ui@store.com', 'ui123');
    
    // Check for basic page structure
    getGreeting().should('be.visible');
    cy.get('body').should('exist');
    cy.get('div').should('exist');
    
    // Verify page has content
    cy.get('body').should('not.be.empty');
  });
});