import { getGreeting } from '../support/app.po';

describe('store-e2e - Element Visibility Test 30', () => {
  beforeEach(() => cy.visit('/'));

  it('should verify all elements are visible', () => {
    cy.login('visibility30@store.com', 'vis30123');
    getGreeting().should('be.visible');
    cy.get('body').should('be.visible');
    cy.get('div').should('exist');
  });
});