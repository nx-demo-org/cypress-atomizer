import { getGreeting } from '../support/app.po';

describe('store-e2e - Content Verification Test 26', () => {
  beforeEach(() => cy.visit('/'));

  it('should verify page content is correct', () => {
    cy.login('content26@store.com', 'content26123');
    getGreeting().contains(/Welcome/);
    cy.get('body').should('not.be.empty');
  });
});