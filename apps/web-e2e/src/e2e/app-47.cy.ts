import { getGreeting } from '../support/app.po';

describe('@cypress-atomizer/web-e2e - Content Verification Test 47', () => {
  beforeEach(() => cy.visit('/'));

  it('should verify page content is correct', () => {
    cy.login('content47@test.com', 'content47123');
    getGreeting().contains(/Welcome/);
    cy.contains('This is the generated root route').should('be.visible');
  });
});