import { getGreeting } from '../support/app.po';

describe('store-e2e - Login Functionality Test 18', () => {
  beforeEach(() => cy.visit('/'));

  it('should handle login functionality', () => {
    cy.login('login18@store.com', 'login18123');
    getGreeting().should('be.visible');
    cy.get('body').should('exist');
  });
});