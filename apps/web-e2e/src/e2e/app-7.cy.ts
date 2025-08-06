import { getGreeting } from '../support/app.po';

describe('@cypress-atomizer/web-e2e - Link Functionality Tests', () => {
  beforeEach(() => cy.visit('/'));

  it('should have working navigation links', () => {
    cy.login('links@test.com', 'links123');
    
    // Test Home link
    cy.contains('Home').should('have.attr', 'href', '/');
    
    // Test Page 2 link
    cy.contains('Page 2').should('have.attr', 'href', '/page-2');
    
    // Test internal page link
    cy.contains('Click here for page 2').should('have.attr', 'href', '/page-2');
  });
});