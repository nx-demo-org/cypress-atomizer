import { getGreeting } from '../support/app.po';

describe('@cypress-atomizer/web-e2e - Content Verification Test 37', () => {
  beforeEach(() => cy.visit('/'));

  it('should verify page content is correct', () => {
    cy.login('content37@test.com', 'content37123');
    getGreeting().contains(/Welcome/);
    cy.contains('This is the generated root route').should('be.visible');
  });
});