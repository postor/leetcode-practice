/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  if (n == 0) return 0
  return recursive(1, n)

  function recursive(from, to) {
    if (from > to) {
      return 1
    }
    let rtn = 0
    for (let i = from; i <= to; i++) {
      let lefts = recursive(from, i - 1)
      let rights = recursive(i + 1, to)
      rtn += lefts * rights
    }
    return rtn
  }
};