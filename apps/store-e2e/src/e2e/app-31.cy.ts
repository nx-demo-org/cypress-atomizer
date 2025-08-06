import { getGreeting } from '../support/app.po';

describe('store-e2e - Content Verification Test 31', () => {
  beforeEach(() => cy.visit('/'));

  it('should verify page content is correct', () => {
    cy.login('content31@store.com', 'content31123');
    getGreeting().contains(/Welcome/);
    cy.get('body').should('not.be.empty');
  });
});