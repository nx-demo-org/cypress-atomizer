import { getGreeting } from '../support/app.po';

describe('store-e2e - Login Functionality Test 43', () => {
  beforeEach(() => cy.visit('/'));

  it('should handle login functionality', () => {
    cy.login('login43@store.com', 'login43123');
    getGreeting().should('be.visible');
    cy.get('body').should('exist');
  });
});