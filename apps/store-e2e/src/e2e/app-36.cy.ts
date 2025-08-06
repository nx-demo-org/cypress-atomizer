import { getGreeting } from '../support/app.po';

describe('store-e2e - Content Verification Test 36', () => {
  beforeEach(() => cy.visit('/'));

  it('should verify page content is correct', () => {
    cy.login('content36@store.com', 'content36123');
    getGreeting().contains(/Welcome/);
    cy.get('body').should('not.be.empty');
  });
});