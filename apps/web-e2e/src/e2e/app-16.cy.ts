import { getGreeting } from '../support/app.po';

describe('@cypress-atomizer/web-e2e - Navigation Flow Test 16', () => {
  beforeEach(() => cy.visit('/'));

  it('should complete full navigation flow', () => {
    cy.login('nav16@test.com', 'nav16123');
    cy.contains('Page 2').click();
    cy.url().should('include', '/page-2');
    cy.contains('Click here to go back to root page').click();
    cy.url().should('eq', Cypress.config().baseUrl + '/');
  });
});