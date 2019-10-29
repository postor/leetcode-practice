/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kInversePairs = function (n, k) {
  if (!k) return 1
  // n  k=0    1    2    3    4    5    6    7    8    9    10   11   12   13
  // 1    1    0    0    0    0      
  // 2    1    1    0    0    0    
  // 3    1    2    2    1    0
  // 4    1    3    5    6    5    3    1
  // sum from the current-n to current column of upper row, try 5, we suppose
  // 5    1    4    9    15   20   
  // n=5 k=3 and count 20 is tested, I suppose it works

  let dp = [1]
  for (let i = 2; i <= n; i++) {
    let dp1 = [], y = 1, rangeSize = i
    for (let j = 1; y > 0 && j <= k+1; j++) {
      y = y % 1000000007
      dp1[j - 1] = y
      y -= dp[j - rangeSize] || 0
      y += dp[j] || 0
    }
    dp = dp1
    //console.log(dp.join(','))
  }
  // console.log(dp.join(','))
  return dp[k] || 0
};

console.log(kInversePairs(5, 3))
console.log(kInversePairs(1000, 1000))