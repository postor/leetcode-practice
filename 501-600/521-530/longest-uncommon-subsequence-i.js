/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var findLUSlength = function (a, b) {
  if (a.length > b.length) return a.length
  if (b.length > a.length) return b.length
  if (a == b) return -1
  return a.length
};