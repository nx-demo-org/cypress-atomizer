import { getGreeting } from '../support/app.po';

describe('store-e2e - Content Verification Test 11', () => {
  beforeEach(() => cy.visit('/'));

  it('should verify page content is correct', () => {
    cy.login('content11@store.com', 'content11123');
    getGreeting().contains(/Welcome/);
    cy.get('body').should('not.be.empty');
  });
});