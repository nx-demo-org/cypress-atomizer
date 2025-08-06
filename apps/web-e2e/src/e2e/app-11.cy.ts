import { getGreeting } from '../support/app.po';

describe('@cypress-atomizer/web-e2e - Navigation Flow Test 11', () => {
  beforeEach(() => cy.visit('/'));

  it('should complete full navigation flow', () => {
    cy.login('nav11@test.com', 'nav11123');
    cy.contains('Page 2').click();
    cy.url().should('include', '/page-2');
    cy.contains('Click here to go back to root page').click();
    cy.url().should('eq', Cypress.config().baseUrl + '/');
  });
});