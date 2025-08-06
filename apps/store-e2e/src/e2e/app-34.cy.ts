import { getGreeting } from '../support/app.po';

describe('store-e2e - Welcome Message Test 34', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message correctly', () => {
    cy.login('welcome34@store.com', 'welcome34123');
    getGreeting().contains(/Welcome/);
    getGreeting().should('be.visible');
  });
});