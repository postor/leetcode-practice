/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  let dp = triangle.map(x => x.map(y => y))
  for (let i = 1; i < triangle.length; i++) {
    for (let j = 0; j < triangle[i].length; j++) {
      let t = []
      if (j < dp[i - 1].length) {
        t.push(triangle[i][j] + dp[i - 1][j])
      }
      if (j > 0) {
        t.push(triangle[i][j] + dp[i - 1][j - 1])
      }

      dp[i][j] = Math.min(...t)
    }
  }
  return Math.min(...dp[dp.length - 1])
};

console.log(minimumTotal([
  [2],
  [3, 4],
  [6, 5, 7],
  [4, 1, 8, 3]
]))