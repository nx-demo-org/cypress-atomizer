import { getGreeting } from '../support/app.po';

describe('@cypress-atomizer/web-e2e - Math Tests 3', () => {
  it('should perform string operations', () => {
    // Simple string assertions instead of DOM interactions
    expect('hello' + ' world').to.equal('hello world');
    expect('test'.length).to.equal(4);
    expect('CYPRESS'.toLowerCase()).to.equal('cypress');
    expect('hello world'.includes('world')).to.be.true;
  });
}); 