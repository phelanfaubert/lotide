const assert = require('chai').assert;
//const assertArraysEqual = require('../assertArraysEqual.js');
const middle = require('../middle.js');

describe("#middle", () => {
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

it("returns [] for [5]", () => {
  assert.deepEqual(middle([5]), []); 
  });
});