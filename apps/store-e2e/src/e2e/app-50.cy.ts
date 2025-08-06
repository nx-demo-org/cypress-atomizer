import { getGreeting } from '../support/app.po';

describe('store-e2e - Element Visibility Test 50', () => {
  beforeEach(() => cy.visit('/'));

  it('should verify all elements are visible', () => {
    cy.login('visibility50@store.com', 'vis50123');
    getGreeting().should('be.visible');
    cy.get('body').should('be.visible');
    cy.get('div').should('exist');
  });
});