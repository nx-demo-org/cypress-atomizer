import { getGreeting } from '../support/app.po';

describe('store-e2e - Page Structure Test 32', () => {
  beforeEach(() => cy.visit('/'));

  it('should verify proper page structure', () => {
    cy.login('structure32@store.com', 'structure32123');
    cy.get('html').should('exist');
    cy.get('head').should('exist');
    cy.get('body').should('exist');
    cy.get('div').should('exist');
  });
});