import { getGreeting } from '../support/app.po';

describe('@cypress-atomizer/web-e2e - Page Structure Test 44', () => {
  beforeEach(() => cy.visit('/'));

  it('should verify proper page structure', () => {
    cy.login('structure44@test.com', 'structure44123');
    cy.get('div').should('exist');
    cy.get('ul').should('exist');
    cy.get('li').should('have.length.at.least', 2);
  });
});