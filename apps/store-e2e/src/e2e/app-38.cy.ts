import { getGreeting } from '../support/app.po';

describe('store-e2e - Login Functionality Test 38', () => {
  beforeEach(() => cy.visit('/'));

  it('should handle login functionality', () => {
    cy.login('login38@store.com', 'login38123');
    getGreeting().should('be.visible');
    cy.get('body').should('exist');
  });
});