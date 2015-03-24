/**
 * Dependencies
 */

var test           = require('tape')
var arraysToObject = require('../')

/**
 * Tests
 */

test('arraysToObject([arr])', function(assert) {
  var arr = [['foo', 'bar'], ['baz', 'qux'], [1, 'one'], [2, 'two']]
  assert.equal(arraysToObject(), undefined)
  assert.deepEqual(arraysToObject(arr), { foo: 'bar', baz: 'qux', 1: 'one', 2: 'two' })
  assert.end()
})
