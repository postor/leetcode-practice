/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (prices.length < 2) return 0
  let ranges = prices.map(x => prices.map(y => y - x))
  let dp = new Array(prices.length).fill(0)
  let dp0n = new Array(prices.length).fill(0)
  let t = 0, m = 0
  for (let i = 1; i < prices.length; i++) {
    t += ranges[i - 1][i]
    if (t < 0) {
      t = 0
    } else {
      m = Math.max(m, t)
    }
    dp0n[i] = m
  }

  dp[0] = 0
  dp[1] = dp0n[1]
  if (prices.length == 2) return dp[1]
  dp[2] = Math.max(dp0n[2], dp[1])
  if (prices.length == 3) return dp[2]
  dp[3] = Math.max(dp0n[3], dp[2])
  if (prices.length == 4) return dp[3]
  //dp[4] = Math.max(dp0n[4], ranges[3][4] + dp[2])

  // 0    1    2    3    4
  // buy  sell cold buy  sell    
  //      buy  sell cold
  // 
  for (let target = 4; target < prices.length; target++) {
    let maxes = [dp[target - 1], dp0n[target]]
    for (let i = 2; i <= target - 2; i++) {
      // 第i天冷却
      let p = dp[i - 1] + ranges[i + 1][target]
      maxes.push(p)
    }
    dp[target] = Math.max(...maxes)
  }

  return dp[dp.length - 1]
};

console.log(maxProfit([6, 1, 3, 2, 4, 7]))