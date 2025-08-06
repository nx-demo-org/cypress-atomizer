import { getGreeting } from '../support/app.po';

describe('store-e2e - Element Visibility Test 25', () => {
  beforeEach(() => cy.visit('/'));

  it('should verify all elements are visible', () => {
    cy.login('visibility25@store.com', 'vis25123');
    getGreeting().should('be.visible');
    cy.get('body').should('be.visible');
    cy.get('div').should('exist');
  });
});