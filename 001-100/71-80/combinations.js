// Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  let rtn = []
  r()
  return rtn

  function r(j = k, arr = [], m = 0) {
    if (j == 0) return rtn.push(arr)
    for (let i = m + 1; i <= n; i++) {
      r(j - 1, arr.concat([i]), Math.max(m + 1, i))
    }
  }
};

console.log(combine(4, 2).join('\n'))