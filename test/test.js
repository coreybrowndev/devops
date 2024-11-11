var main = require('../index');
var assert = require('assert');
describe('Regular fibonacci value', function() {
    it('should return 720 for Factorial(6)', function() {
        assert.strictEqual(main.fibonacci(6), 720);
      });
});

describe('First two terms', function() {
  it('should return 1 for first two terms', function() {
      assert.strictEqual(main.factorial(0), 1);
      assert.strictEqual(main.fibonacci(1), 1);
    });
});

describe('negative numbers', function() {
  it('should return undefined', function() {
    assert.strictEqual(main.factorial(-1), undefined)
  })
})
