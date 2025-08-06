import { getGreeting } from '../support/app.po';

describe('store-e2e - Login Functionality Test 33', () => {
  beforeEach(() => cy.visit('/'));

  it('should handle login functionality', () => {
    cy.login('login33@store.com', 'login33123');
    getGreeting().should('be.visible');
    cy.get('body').should('exist');
  });
});