import { getGreeting } from '../support/app.po';

describe('@cypress-atomizer/web-e2e - Link Functionality Test 43', () => {
  beforeEach(() => cy.visit('/'));

  it('should test all links work correctly', () => {
    cy.login('links43@test.com', 'links43123');
    cy.get('a').each(($link) => {
      cy.wrap($link).should('have.attr', 'href');
    });
  });
});