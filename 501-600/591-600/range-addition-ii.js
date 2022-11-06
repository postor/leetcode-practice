/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function (m, n, ops) {
  let minI = m, minJ = n
  for (let [a, b] of ops) {
    if (a === 0 || b === 0) continue
    minI = Math.min(minI, a)
    minJ = Math.min(minJ, b)
  }
  return minI * minJ
};

console.log(maxCount(3,
  3,
  [[2, 2], [3, 3]]))