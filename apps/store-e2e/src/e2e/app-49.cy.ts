import { getGreeting } from '../support/app.po';

describe('store-e2e - Welcome Message Test 49', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message correctly', () => {
    cy.login('welcome49@store.com', 'welcome49123');
    getGreeting().contains(/Welcome/);
    getGreeting().should('be.visible');
  });
});