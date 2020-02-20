/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
  for (let bigger = Math.floor(Math.sqrt(c)); bigger >= Math.ceil(Math.sqrt(c / 2)); bigger--) {
    if (isSquare(c - bigger * bigger)) return true
    // console.log([bigger, Math.sqrt(c - bigger * bigger)])
  }
  return false

  function isSquare(val) {
    // if (val == 100) debugger
    if (val < 0) return false
    if (val < 2) return true
    let l = 0, r = val
    while (l < r) {
      let mid = Math.floor((l + r) / 2), midSquire = mid * mid
      if (midSquire < val) {
        l = mid + 1
        continue
      }
      if (midSquire > val) {
        r = mid
        continue
      }
      return true
    }
    return false
  }
};
// for (let i = 1; i < 30; i++) {
//   console.log(i, judgeSquareSum(i))
// }
// console.log(judgeSquareSum(2147483643))
// console.log(judgeSquareSum(2147483643))
// console.log(judgeSquareSum(1000))