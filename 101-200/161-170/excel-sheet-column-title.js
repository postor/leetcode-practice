/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function (n) {
  let aCode = 'A'.charCodeAt(0)
  let t = n - 1, rtn = ''
  while (true) {
    let m = t % 26
    rtn = String.fromCharCode(m + aCode) + rtn
    t = t - m
    if (!t) return rtn
    t /= 26
    t-=1
  }
};

// for (let i = 1; i < 30; i++) {
//   console.log(convertToTitle(i))
// }
console.log(convertToTitle(28))
console.log(convertToTitle(701))