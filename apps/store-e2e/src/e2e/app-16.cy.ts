import { getGreeting } from '../support/app.po';

describe('store-e2e - Content Verification Test 16', () => {
  beforeEach(() => cy.visit('/'));

  it('should verify page content is correct', () => {
    cy.login('content16@store.com', 'content16123');
    getGreeting().contains(/Welcome/);
    cy.get('body').should('not.be.empty');
  });
});