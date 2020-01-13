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
  // when add a new number, for example n=5
  //   5 x x x x creates 4 new inverse pairs
  //   x 5 x x x creates 3 new inverse pairs
  //   ...
  //   x x x x 5 creates 0 new inverse pairs
  // if k < n
  // dp[n][k] = dp[n][k-1]+dp[n-1][k] 
  // dp[5][0] = dp[4][0](x x x x 5) = dp[5][-1]+dp[4][0] 
  // dp[5][1] = dp[4][0](x x x 5 x)+dp[4][1](x x x x 5) =  dp[5][0]+dp[4][1] 
  // dp[5][2] = dp[4][0](x x 5 x x)+dp[4][1](x x x 5 x)+dp[4][2](x x x x 5) =  dp[5][1]+dp[4][2] 
  // ...
  // dp[5][4] = dp[5][3]+dp[4][4]
  // if k >= n
  // dp[5][5] = dp[4][1](5 x x x x)+dp[4][2](x 5 x x x)+dp[4][3](x x 5 x x)+dp[4][4](x x x 5 x)+dp[4][5](x x x x 5) 
  //          = dp[5][4]+dp[4][2]-dp[4][0] 
  let dp = [1]
  for (let i = 2; i <= n; i++) {
    let dp1 = [1]
    for (let j = 1; j < i; j++) {
      dp1[j] = ((dp1[j - 1] || 0) + (dp[j] || 0)) % 1000000007
    }
    let a = i, t = dp1[i - 1]
    while (t > 0 && a <= k) {
      t = t + (dp[a] || 0) - (dp[a - i] || 0)
      while (t < 0) t += 1000000007
      dp1.push((t) % 1000000007)
      a++
    }
    // console.log(dp1.join('\t'))
    dp = dp1
  }
  return dp[k] || 0
};

// console.log(kInversePairs(3, 0))
// console.log(kInversePairs(3, 1))
// console.log(kInversePairs(5, 3))
// console.log(kInversePairs(1000, 1000))