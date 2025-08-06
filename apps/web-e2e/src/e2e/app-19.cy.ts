import { getGreeting } from '../support/app.po';

describe('@cypress-atomizer/web-e2e - Page Structure Test 19', () => {
  beforeEach(() => cy.visit('/'));

  it('should verify proper page structure', () => {
    cy.login('structure19@test.com', 'structure19123');
    cy.get('div').should('exist');
    cy.get('ul').should('exist');
    cy.get('li').should('have.length.at.least', 2);
  });
});