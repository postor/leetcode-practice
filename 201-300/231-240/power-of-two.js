/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  if (n < 0) return false
  let t = 1, count = 0
  while (true) {
    if (n & t) {
      count++
    }
    if (count == 2) return false
    t = t << 1
    if (!t || t > Number.MAX_SAFE_INTEGER) break
  }
  if (count == 0) return false
  return true
};

// console.log(isPowerOfTwo(1))