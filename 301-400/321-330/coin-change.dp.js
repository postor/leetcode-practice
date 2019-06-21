/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  coins.sort((x, y) => x - y)
  const CAN_NOT_REACH = -1
  const dp = new Array(amount + 1).fill(CAN_NOT_REACH)
  dp[0] = 0
  coins.filter(x => x <= amount).forEach(x => dp[x] = 1)
  if (dp[amount] != CAN_NOT_REACH) return dp[amount]
  for (let i = 1; i <= amount; i++) {
    if (dp[i] != CAN_NOT_REACH) continue
    let arr = coins
      .map(x => i - x)  // 减去1张的面额
      .filter(x => x >= 0) // 变成负数的不管了
      .map(x => dp[x]) // 对应面额的最小张数
      .filter(x => x != CAN_NOT_REACH) // 达不到的不管了
    if (arr.length) {
      dp[i] = Math.min(...arr) + 1
    }
  }
  return dp[amount]
};

// console.log(coinChange([1, 2, 5], 11))
// console.log(coinChange([2], 3))
// console.log(coinChange([1, 2147483647], 2))