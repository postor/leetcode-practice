/**
 * @param {number} N
 * @param {number[][]} mines
 * @return {number}
 */
var orderOfLargestPlusSign = function (N, mines) {
  let dp = new Array(N).fill(0).map(x => new Array(N).fill(1))
  for (let [i, j] of mines) {
    dp[i][j] = 0
  }
  for (let k = 1; ; k++) {
    let exists = false, len = k - 1
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        if (dp[i][j] != Math.max(k - 1, 1)) continue
        if (is0(i + len, j) || is0(i - len, j) || is0(i, j + len) || is0(i, j - len)) continue
        dp[i][j] = k
        exists = true
      }
    }
    if (!exists) return k - 1
  }

  function is0(i, j) {
    if (i < 0 || j < 0 || i >= N || j >= N || dp[i][j] == 0) return true
    return false
  }
};

// console.log(orderOfLargestPlusSign(5, [[4, 2]]))