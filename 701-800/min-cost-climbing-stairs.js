/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  let dpLen = cost.length + 3
  let dp = new Array(dpLen).fill(0) // [0,0,first,second,....,last,top]
  for (let i = 2; i < dpLen; i++) {
    dp[i] = (cost[i - 2] || 0) + Math.min(dp[i - 1], dp[i - 2])
  }
  return dp[dpLen - 1]
};

console.log(minCostClimbingStairs([0, 0, 0, 0]))