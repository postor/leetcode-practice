/**
 * @param {number} n
 * @param {number} minProfit
 * @param {number[]} group
 * @param {number[]} profit
 * @return {number}
 */
var profitableSchemes = function (n, minProfit, group, profit) {
  const modby = Math.pow(10, 9) + 7
  let dp = new Array(n + 1).fill(0).map(
    x => new Array(minProfit + 1).fill(0)
  )
  dp[0][0] = 1
  for (let i = 0; i < group.length; i++) {
    if (group[i] > n) continue
    for (let n1 = n - group[i]; n1 >= 0; n1--) {
      for (let profit1 = minProfit; profit1 >= 0; profit1--) {
        dp[n1 + group[i]][Math.min(minProfit, profit1 + profit[i])] += dp[n1][profit1] % modby
        if (dp[n1][profit1]) debugger
      }
    }
  }
  return dp.reduce((prev, cur) => cur[minProfit] + prev, 0) % modby
};

console.log(profitableSchemes(10, 5, [2, 3, 5], [6, 7, 8])) // 7