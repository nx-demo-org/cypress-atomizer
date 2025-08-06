import { getGreeting } from '../support/app.po';

describe('@cypress-atomizer/web-e2e - Content Verification Test 17', () => {
  beforeEach(() => cy.visit('/'));

  it('should verify page content is correct', () => {
    cy.login('content17@test.com', 'content17123');
    getGreeting().contains(/Welcome/);
    cy.contains('This is the generated root route').should('be.visible');
  });
});