import { getGreeting } from '../support/app.po';

describe('store-e2e - Welcome Message Test 19', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message correctly', () => {
    cy.login('welcome19@store.com', 'welcome19123');
    getGreeting().contains(/Welcome/);
    getGreeting().should('be.visible');
  });
});