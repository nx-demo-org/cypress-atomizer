import { getGreeting } from '../support/app.po';

describe('store-e2e - Welcome Message Test 9', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message correctly', () => {
    cy.login('welcome9@store.com', 'welcome9123');
    getGreeting().contains(/Welcome/);
    getGreeting().should('be.visible');
  });
});