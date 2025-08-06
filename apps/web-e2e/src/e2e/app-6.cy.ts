import { getGreeting } from '../support/app.po';

describe('@cypress-atomizer/web-e2e - Content Validation Tests', () => {
  beforeEach(() => cy.visit('/'));

  it('should display correct welcome message', () => {
    cy.login('content@test.com', 'content123');
    
    getGreeting().should('contain', 'Welcome');
    getGreeting().should('contain', '@cypress-atomizer/web');
  });

  it('should have proper page structure', () => {
    cy.login('structure@test.com', 'structure123');
    
    cy.get('div').should('exist');
    cy.get('h1').should('exist');
    cy.get('ul').should('exist');
    cy.get('li').should('have.length.at.least', 2);
  });
});