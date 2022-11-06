/**
 * @param {number} n
 * @param {number} k
 * @param {number} maxPts
 * @return {number}
 */
var new21Game = function (n, k, maxPts) {
  let dp = new Array(k + maxPts).fill(0)
  for (let p = k + maxPts - 1; p >= 0; p--) {
    if (p > n) {
      dp[p] = 0
      continue
    }
    if (p >= k) {
      dp[p] = 1
      continue
    }
    // p<k
    for (let i = 1; i <= maxPts; i++) {
      dp[p] += dp[p + i] / maxPts
    }
  }
  return dp[0]
};

console.log(new21Game(6, 1, 10)) //0.6
console.log(new21Game(21, 17, 10)) //0.73278
console.time()
console.log(new21Game(5710,
  5070,
  8516))

  console.timeEnd()
console.time()
console.log(new21Game(9301,
  9224,
  7771))
console.timeEnd()