import { getGreeting } from '../support/app.po';

describe('store-e2e - Welcome Message Test 39', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message correctly', () => {
    cy.login('welcome39@store.com', 'welcome39123');
    getGreeting().contains(/Welcome/);
    getGreeting().should('be.visible');
  });
});