import { getGreeting } from '../support/app.po';

describe('store-e2e - Welcome Message Test 14', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message correctly', () => {
    cy.login('welcome14@store.com', 'welcome14123');
    getGreeting().contains(/Welcome/);
    getGreeting().should('be.visible');
  });
});