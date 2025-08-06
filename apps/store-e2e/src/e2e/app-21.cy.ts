import { getGreeting } from '../support/app.po';

describe('store-e2e - Content Verification Test 21', () => {
  beforeEach(() => cy.visit('/'));

  it('should verify page content is correct', () => {
    cy.login('content21@store.com', 'content21123');
    getGreeting().contains(/Welcome/);
    cy.get('body').should('not.be.empty');
  });
});