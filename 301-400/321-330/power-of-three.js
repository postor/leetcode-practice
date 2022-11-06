/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  if (n < 3) return n == 1
  let t = 3
  while (t < n) {
    t = t * t
  }
  while (t > n) {
    t /= 3
  }
  return t === n
};