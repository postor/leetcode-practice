/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function (matrix) {
  // console.log(matrix.map(x => x.join('\t')).join('\n'))
  if (!matrix.length) return 0
  if (!matrix[0].length) return 0
  // 转数组并排序
  let arr = new Array(matrix.length * matrix[0].length)
  matrix.forEach((x, i) => x.map((y, j) => arr[matrix[0].length * i + j] = [y, i, j]))
  arr.sort(([a], [b]) => a - b)
  // dp 
  let dp = matrix.map(x => x.map(y => 1))
  let max = 1

  arr.forEach(([v, i, j]) => {
    // up
    detectAndUpdate(i - 1, j, v, dp[i][j])
    // down
    detectAndUpdate(i + 1, j, v, dp[i][j])
    // left
    detectAndUpdate(i, j - 1, v, dp[i][j])
    // right
    detectAndUpdate(i, j + 1, v, dp[i][j])
  })
  // console.log('---')
  // console.log(dp.map(x => x.join('\t')).join('\n'))
  return max


  function detectAndUpdate(i, j, v, count, dp1 = dp) {
    if (i < 0 || j < 0 || i >= matrix.length || j >= matrix[0].length) return
    if (matrix[i][j] <= v) return
    dp1[i][j] = Math.max(count + 1, dp1[i][j])
    max = Math.max(max, dp1[i][j])
  }
};

console.log(longestIncreasingPath([[9, 9, 4], [6, 6, 8], [2, 1, 1]]))