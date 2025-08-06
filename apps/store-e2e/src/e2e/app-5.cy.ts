import { getGreeting } from '../support/app.po';

describe('store-e2e - Performance Tests', () => {
  beforeEach(() => cy.visit('/'));

  it('should load page within acceptable time', () => {
    cy.login('perf@store.com', 'perf123');
    
    // Measure page load time
    cy.window().then((win) => {
      const performance = win.performance;
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      expect(navigation.loadEventEnd - navigation.loadEventStart).to.be.lessThan(3000);
    });
    
    // Verify page content loads
    getGreeting().should('be.visible');
  });
});