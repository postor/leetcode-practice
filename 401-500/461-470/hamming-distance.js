/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  let xor = x ^ y
  let count = 0
  while (xor) {
    if (xor & 1) count++
    xor >>= 1
  }
  return count
};  

// console.log(hammingDistance(1,4))