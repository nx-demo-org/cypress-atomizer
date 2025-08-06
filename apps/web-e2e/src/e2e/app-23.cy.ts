import { getGreeting } from '../support/app.po';

describe('@cypress-atomizer/web-e2e - Link Functionality Test 23', () => {
  beforeEach(() => cy.visit('/'));

  it('should test all links work correctly', () => {
    cy.login('links23@test.com', 'links23123');
    cy.get('a').each(($link) => {
      cy.wrap($link).should('have.attr', 'href');
    });
  });
});