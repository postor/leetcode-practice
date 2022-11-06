/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  let total = m + n - 2
  let min = Math.min(m, n) - 1
  //计算从total取min的组合
  return mt(total, min) / mt(min, min)

  function mt(x, n) {
    let rtn = 1
    for (let i = 0; i < n; i++) {
      rtn *= x - i
    }
    return rtn
  }
};

console.log(uniquePaths(7, 3))