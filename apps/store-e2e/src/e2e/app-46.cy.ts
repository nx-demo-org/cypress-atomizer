describe('store-e2e - Advanced Math Test 46', () => {
  it('should perform advanced math operations', () => {
    expect(5 ** 2).to.equal(25);
    expect(Math.sqrt(16)).to.equal(4);
    expect(Math.PI).to.be.closeTo(3.14159, 0.00001);
    expect(Math.floor(3.7)).to.equal(3);
  });
});