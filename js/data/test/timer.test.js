import {expect} from 'chai';
import timer from '../timer';

describe(`timer funtionality`, () => {
  it(`it should notify when timer is over`, () => {
    expect(timer(0).tick()).to.be.equal(true);
  });

  it(`it should notify that timer is over when negative number is provided`, () => {
    expect(timer(-2).tick()).to.be.equal(true);
  });

  it(`will run twice before timer expires`, () => {
    const t = timer(2);
    expect(t.tick()).to.be.equal(false);
    expect(t.tick()).to.be.equal(false);
    expect(t.tick()).to.be.equal(true);
  });
});
