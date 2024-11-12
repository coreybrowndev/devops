var main = require('../index');
var assert = require('assert');

describe('Regular Factorial value', function() {
    it('should return 120 for Factorial(5)', function() {
        assert.strictEqual(main.factorial(5), 120);
      });
});

describe('First two terms', function() {
  it('should return 1 for first two terms', function() {
      assert.strictEqual(main.factorial(0), 1);
      assert.strictEqual(main.factorial(1), 1);
    });
});

describe('negative numbers', function() {
  it('should return undefined', function() {
    assert.strictEqual(main.factorial(-1), undefined)
  })
})
