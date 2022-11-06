/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // dp 表计算第i天买，j天卖卖的收益
  let dp = prices.map((x, i) => prices.map((y, j) => j > i ? Math.max(y - x, 0) : null))
  //console.log(dp.map(x => x.join('\t')).join('\n'))

  // 收拢dp，计算第i天到第j天最大收益
  for (let t = 2; t < prices.length; t++) {
    for (let i = 0; i < prices.length - t; i++) {
      let j = i + t
      dp[i][j] = Math.max(dp[i][j], dp[i + 1][j], dp[i][j - 1])
      if (dp[i][j] != dp[i][j]) {
        console.log(i, j)
      }
    }
  }

  console.log(dp.map(x => x.join('\t')).join('\n'))
  let max = 0
  for (let d = 0; d < prices.length; d++) {
    max = Math.max(max, findMax(0, d) + findMax(d, prices.length))
  }
  return max

  function findMax(start, end) {
    if (start >= end) return 0
    if (!dp[start]) {
      console.log(start, end)
    }
    return dp[start][end - 1]
  }
};


console.log(maxProfit([3, 3, 5, 0, 0, 3, 1, 4]))