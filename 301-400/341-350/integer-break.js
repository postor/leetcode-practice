/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
  let dp = new Array(59)
  dp[0] = dp[1] = 0
  dp[2] = 1

  for (let target = 3; target <= n; target++) {
    let max = 0
    // break
    for (let a = 1; a < target; a++) {
      let b = target - a
      if (a > b) break
      max = Math.max(max, dp[b] * a, a * b)
    }
    dp[target] = max
  }
  return dp[n]
};

console.log(integerBreak(10))