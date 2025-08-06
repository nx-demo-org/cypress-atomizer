import { getGreeting } from '../support/app.po';

describe('store-e2e - Element Visibility Test 20', () => {
  beforeEach(() => cy.visit('/'));

  it('should verify all elements are visible', () => {
    cy.login('visibility20@store.com', 'vis20123');
    getGreeting().should('be.visible');
    cy.get('body').should('be.visible');
    cy.get('div').should('exist');
  });
});