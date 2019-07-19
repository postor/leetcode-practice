/**
 * @param {number} n
 * @return {number}
 */
var integerReplacement = function (n) {
  let dp = new Array(n + 1)
  dp[1] = 0
  fill2i(1)
  for (let i = 2; i <= n; i++) {
    if (dp[i]) continue
    dp[i] = dp[i - 1] + 1
    if (dp[i + 1]) dp[i] = Math.min(dp[i], dp[i + 1] + 1)
    fill2i(i)
  }
  function fill2i(i) {
    let t = i, t2 = 2 * i
    while (t2 <= n) {
      if (!dp[t2]) dp[t2] = dp[t] + 1
      t = t2
      t2 = t2 * 2
    }
  }
  return dp[n]
};