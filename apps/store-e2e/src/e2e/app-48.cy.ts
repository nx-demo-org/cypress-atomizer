import { getGreeting } from '../support/app.po';

describe('store-e2e - Login Functionality Test 48', () => {
  beforeEach(() => cy.visit('/'));

  it('should handle login functionality', () => {
    cy.login('login48@store.com', 'login48123');
    getGreeting().should('be.visible');
    cy.get('body').should('exist');
  });
});