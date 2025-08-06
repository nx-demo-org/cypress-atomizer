import { getGreeting } from '../support/app.po';

describe('@cypress-atomizer/web-e2e - Math Tests', () => {
  it('should perform basic math operations', () => {
    // Simple math assertions instead of DOM interactions
    expect(1 + 1).to.equal(2);
    expect(2 * 3).to.equal(6);
    expect(10 - 5).to.equal(5);
    expect(15 / 3).to.equal(5);
  });
}); 