import { getGreeting } from '../support/app.po';

describe('@cypress-atomizer/web-e2e - Element Visibility Test 15', () => {
  beforeEach(() => cy.visit('/'));

  it('should verify all elements are visible', () => {
    cy.login('visibility15@test.com', 'vis15123');
    getGreeting().should('be.visible');
    cy.get('[role="navigation"]').should('be.visible');
    cy.contains('Home').should('be.visible');
    cy.contains('Page 2').should('be.visible');
  });
});