/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  return r(0, num)

  function r(from, to) {
    if (to - from < 2) return false
    let t = Math.floor((from + to) / 2)
    let square = t * t
    if (square == num) return true
    if (square > num) return r(from, t)
    return r(t, to)
  }
};

// console.log(isPerfectSquare(16))
// console.log(isPerfectSquare(14))