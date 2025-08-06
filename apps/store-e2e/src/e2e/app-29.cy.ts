import { getGreeting } from '../support/app.po';

describe('store-e2e - Welcome Message Test 29', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message correctly', () => {
    cy.login('welcome29@store.com', 'welcome29123');
    getGreeting().contains(/Welcome/);
    getGreeting().should('be.visible');
  });
});