import { getGreeting } from '../support/app.po';

describe('@cypress-atomizer/web-e2e - SEO Tests', () => {
  beforeEach(() => cy.visit('/'));

  it('should have proper meta tags', () => {
    cy.login('seo@test.com', 'seo123');
    
    // Check for basic meta tags
    cy.get('head').should('exist');
    cy.get('title').should('exist');
    
    // Verify page has proper structure for SEO
    cy.get('h1').should('exist');
    cy.get('nav').should('exist');
  });
});