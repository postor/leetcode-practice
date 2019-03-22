/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  let op = 1, d = dividend, b = divisor, i = 0
  if (dividend < 0) {
    op = -op
    d = -dividend
  }
  if (divisor < 0) {
    op = -op
    b = -divisor
  }

  while (d >= b) {
    i++
    d -= b
  }

  const n31 = Math.pow(2, 31)
  if (op < 0) {
    if (i > n31) {
      return -n31
    }
    return -i
  }

  if (i > n31 - 1) {
    return n31 - 1
  }
  return i
};