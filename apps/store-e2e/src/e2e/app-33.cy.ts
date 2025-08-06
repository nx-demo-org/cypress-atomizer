describe('store-e2e - Array Operations Test 33', () => {
  it('should perform array operations', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(arr.length).to.equal(5);
    expect(arr[0]).to.equal(1);
    expect(arr.includes(3)).to.be.true;
    expect(arr.filter(x => x > 2)).to.deep.equal([3, 4, 5]);
  });
});