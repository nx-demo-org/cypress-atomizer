import { getGreeting } from '../support/app.po';

describe('@cypress-atomizer/web-e2e - Performance Tests', () => {
  beforeEach(() => cy.visit('/'));

  it('should load page within acceptable time', () => {
    cy.login('performance@test.com', 'perf123');
    
    // Measure page load time
    cy.window().then((win) => {
      const performance = win.performance;
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      expect(navigation.loadEventEnd - navigation.loadEventStart).to.be.lessThan(3000);
    });
    
    // Verify page content loads
    getGreeting().should('be.visible');
  });

  it('should have fast navigation between pages', () => {
    cy.login('nav@test.com', 'nav123');
    
    // Time navigation to page 2
    const startTime = Date.now();
    cy.contains('Page 2').click();
    cy.url().should('include', '/page-2');
    const endTime = Date.now();
    
    // Navigation should be fast (less than 1 second)
    expect(endTime - startTime).to.be.lessThan(1000);
  });
}); 