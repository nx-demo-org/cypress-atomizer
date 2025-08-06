import { getGreeting } from '../support/app.po';

describe('@cypress-atomizer/web-e2e - Link Functionality Test 28', () => {
  beforeEach(() => cy.visit('/'));

  it('should test all links work correctly', () => {
    cy.login('links28@test.com', 'links28123');
    cy.get('a').each(($link) => {
      cy.wrap($link).should('have.attr', 'href');
    });
  });
});