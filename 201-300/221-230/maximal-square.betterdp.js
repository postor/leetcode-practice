/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  let maxLen = 0, dp = matrix.map(x => x.map(y => y != '0'))
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (!dp[i][j]) continue
      let top = i == 0 ? 0 : dp[i - 1][j]
      let left = j == 0 ? 0 : dp[i][j - 1]
      let topLeft = (i > 0 && j > 0) ? dp[i - 1][j - 1] : 0
      dp[i][j] = Math.min(top, left, topLeft) + 1
      maxLen = Math.max(maxLen, dp[i][j])
    }
  }
  return maxLen*maxLen
};

// console.log(maximalSquare([
//   [1, 0, 1, 0, 0],
//   [1, 0, 1, 1, 1],
//   [1, 1, 1, 1, 1],
//   [1, 0, 0, 1, 0],
// ]))


console.log(maximalSquare([
  ["1", "0", "1", "0", "0"],
  ["1", "0", "1", "1", "1"],
  ["1", "1", "1", "1", "1"],
  ["1", "0", "0", "1", "0"]]))