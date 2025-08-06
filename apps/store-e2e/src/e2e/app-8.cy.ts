import { getGreeting } from '../support/app.po';

describe('store-e2e - Login Functionality Test 8', () => {
  beforeEach(() => cy.visit('/'));

  it('should handle login functionality', () => {
    cy.login('login8@store.com', 'login8123');
    getGreeting().should('be.visible');
    cy.get('body').should('exist');
  });
});