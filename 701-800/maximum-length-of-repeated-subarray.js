/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function (A, B) {
  let dp = A.map(x => B.map(y => 0)), max = 0
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < B.length; j++) {
      if (A[i] == B[j]) {
        dp[i][j] = (i > 0 && j > 0) ? dp[i - 1][j - 1] + 1 : 1
        max = Math.max(max, dp[i][j])
      }
    }
  }
  return max
};