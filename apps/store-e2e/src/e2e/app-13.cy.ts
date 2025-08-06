import { getGreeting } from '../support/app.po';

describe('store-e2e - Login Functionality Test 13', () => {
  beforeEach(() => cy.visit('/'));

  it('should handle login functionality', () => {
    cy.login('login13@store.com', 'login13123');
    getGreeting().should('be.visible');
    cy.get('body').should('exist');
  });
});