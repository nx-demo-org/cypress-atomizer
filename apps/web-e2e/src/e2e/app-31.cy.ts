import { getGreeting } from '../support/app.po';

describe('@cypress-atomizer/web-e2e - Navigation Flow Test 31', () => {
  beforeEach(() => cy.visit('/'));

  it('should complete full navigation flow', () => {
    cy.login('nav31@test.com', 'nav31123');
    cy.contains('Page 2').click();
    cy.url().should('include', '/page-2');
    cy.contains('Click here to go back to root page').click();
    cy.url().should('eq', Cypress.config().baseUrl + '/');
  });
});