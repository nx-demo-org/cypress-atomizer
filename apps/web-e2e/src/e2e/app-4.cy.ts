import { getGreeting } from '../support/app.po';

describe('@cypress-atomizer/web-e2e - Math Tests 4', () => {
  it('should perform array operations', () => {
    // Simple array assertions instead of DOM interactions
    const arr = [1, 2, 3, 4, 5];
    expect(arr.length).to.equal(5);
    expect(arr[0]).to.equal(1);
    expect(arr.includes(3)).to.be.true;
    expect(arr.filter(x => x > 2)).to.deep.equal([3, 4, 5]);
  });
}); 