import { getGreeting } from '../support/app.po';

describe('store-e2e - Welcome Message Test 24', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message correctly', () => {
    cy.login('welcome24@store.com', 'welcome24123');
    getGreeting().contains(/Welcome/);
    getGreeting().should('be.visible');
  });
});