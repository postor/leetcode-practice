/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (n == 0) return 1
  if (x == 0) {
    if (n > 0) return 0
    return 1 / 0
  }
  if (x == 1) {
    return 1
  }
  if (x == -1) {
    return n % 2 == 1 ? -1 : 1
  }
  let n1 = n > 0 ? n : -n
  let y = 1
  for (let i = 0; i < n1; i++) {
    y *= x
  }
  if (n < 0) {
    return 1 / y
  }
  return y
};


console.log(myPow(1.00001, 123456))