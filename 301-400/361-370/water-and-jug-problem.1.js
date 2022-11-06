/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {boolean}
 */
var canMeasureWater = function (x, y, z) {
  if (z == 0) return true
  if (x + y == z) return true
  return z < x + y && z % gcd(x, y) == 0

  function gcd(a, b) {
    if (b == 0) return a
    return gcd(b, a % b)
  }
};

console.log(canMeasureWater(22003,
  31237,
  1))

console.log(canMeasureWater(2, 6, 5))
console.log(canMeasureWater(3, 5, 4))