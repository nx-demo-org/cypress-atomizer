import { getGreeting } from '../support/app.po';

describe('store-e2e - Login Functionality Test 23', () => {
  beforeEach(() => cy.visit('/'));

  it('should handle login functionality', () => {
    cy.login('login23@store.com', 'login23123');
    getGreeting().should('be.visible');
    cy.get('body').should('exist');
  });
});