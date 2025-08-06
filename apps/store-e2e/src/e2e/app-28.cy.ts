import { getGreeting } from '../support/app.po';

describe('store-e2e - Login Functionality Test 28', () => {
  beforeEach(() => cy.visit('/'));

  it('should handle login functionality', () => {
    cy.login('login28@store.com', 'login28123');
    getGreeting().should('be.visible');
    cy.get('body').should('exist');
  });
});