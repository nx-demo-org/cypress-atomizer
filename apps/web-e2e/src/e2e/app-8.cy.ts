import { getGreeting } from '../support/app.po';

describe('@cypress-atomizer/web-e2e - Browser Compatibility Tests', () => {
  beforeEach(() => cy.visit('/'));

  it('should work with different user agents', () => {
    cy.login('browser@test.com', 'browser123');
    
    // Test with different user agent
    cy.visit('/', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });
    
    getGreeting().should('be.visible');
    cy.get('[role="navigation"]').should('be.visible');
  });
});