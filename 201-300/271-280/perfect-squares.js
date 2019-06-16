/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  const cs = candidates()
  let min = n
  r(n, 0, 0)
  return min

  function r(left, i, count) {
    if (count >= min) return
    if (i == cs.length - 1) {
      let f = count + left
      if (f < min) min = f
      return
    }
    let c = Math.floor(left / cs[i])
    for (let j = c; j >= 0; j--) {
      r(left - j * cs[i], i + 1, count + j)
    }
  }

  function candidates() {
    let rtn = []
    for (let i = 1; ; i++) {
      let s = i * i
      if (s > n) return rtn
      rtn.unshift(s)
    }
  }
};
console.time()
console.log(numSquares(6175))
console.timeEnd()