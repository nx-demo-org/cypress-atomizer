import { getGreeting } from '../support/app.po';

describe('store-e2e - Content Verification Test 41', () => {
  beforeEach(() => cy.visit('/'));

  it('should verify page content is correct', () => {
    cy.login('content41@store.com', 'content41123');
    getGreeting().contains(/Welcome/);
    cy.get('body').should('not.be.empty');
  });
});