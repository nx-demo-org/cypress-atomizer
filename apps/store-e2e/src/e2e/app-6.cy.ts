import { getGreeting } from '../support/app.po';

describe('store-e2e - Content Verification Test 6', () => {
  beforeEach(() => cy.visit('/'));

  it('should verify page content is correct', () => {
    cy.login('content6@store.com', 'content6123');
    getGreeting().contains(/Welcome/);
    cy.get('body').should('not.be.empty');
  });
});