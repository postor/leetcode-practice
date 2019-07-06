/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (k, prices) {
  if (prices.length < 2) return 0
  
  if (k > prices.length / 2) {
    let max = 0
    for (let i = 1; i < prices.length; i++) {
      let t = prices[i] - prices[i - 1]
      if(t>0) max+=t
    }
    return max
  }

  let dp = prices.map(x => new Array(k + 1).fill(0))
  for (let offset = 2; offset < k + prices.length; offset++) {
    for (let i = 1; i < offset && i < prices.length; i++) {
      let ki = offset - i
      if (ki > k) continue
      let max = 0
      for (let j = 0; j < i; j++) {
        let t = (ki == 0 || j == 0)
          ? Math.max(dp[i - 1][ki], prices[i] - prices[j])
          : Math.max(dp[i - 1][ki], prices[i] - prices[j] + dp[j - 1][ki - 1])
        max = Math.max(max, t)
      }
      dp[i][ki] = max
    }
  }
  return dp[prices.length - 1][k]
};

console.log(maxProfit(2, [3, 2, 6, 5, 0, 3]))