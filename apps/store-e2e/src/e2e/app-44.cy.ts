import { getGreeting } from '../support/app.po';

describe('store-e2e - Welcome Message Test 44', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message correctly', () => {
    cy.login('welcome44@store.com', 'welcome44123');
    getGreeting().contains(/Welcome/);
    getGreeting().should('be.visible');
  });
});