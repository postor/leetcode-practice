/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function (n) {
  let base = 0b11 & n, t = n
  if (base !== 0b10 && base != 0b01) return false
  while (true) {
    t = t >> 2
    if (t === 0) return true
    if ((0b11 & t) !== base) return false
  }
};

// console.log(hasAlternatingBits(5))