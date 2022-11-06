/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  const BITS = getBits()
  return BITS.reduce((result, next) => {
    return result + ((n & next) ? 1 : 0)
  }, 0)

  function getBits() {
    let bits = [], cur = 1
    for (let i = 31; i >= 0; i--) {
      bits[i] = cur
      cur *= 2
    }
    return bits
  }
};