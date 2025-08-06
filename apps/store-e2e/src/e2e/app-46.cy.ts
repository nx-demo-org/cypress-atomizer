import { getGreeting } from '../support/app.po';

describe('store-e2e - Content Verification Test 46', () => {
  beforeEach(() => cy.visit('/'));

  it('should verify page content is correct', () => {
    cy.login('content46@store.com', 'content46123');
    getGreeting().contains(/Welcome/);
    cy.get('body').should('not.be.empty');
  });
});