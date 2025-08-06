describe('store-e2e - String Operations Test 22', () => {
  it('should perform string operations', () => {
    expect('hello' + ' world').to.equal('hello world');
    expect('test'.length).to.equal(4);
    expect('CYPRESS'.toLowerCase()).to.equal('cypress');
    expect('hello world'.includes('world')).to.be.true;
  });
});