/**
 * Dependencies
 */

var isArray = Array.isArray

/**
 * Transform the nested arrays in `arr` into an object.
 *
 * @param  {array} arr
 * @return {object}
 *
 * @api public
 */

function arraysToObject(arr) {
  if (!arr || !isArray(arr)) return
  var results = {}
  arr.forEach(function(set) {
    var key = set[0]
    var val = set[1]
    results[key] = val
  })
  return results
}

/**
 * Exports
 */

module.exports = arraysToObject
