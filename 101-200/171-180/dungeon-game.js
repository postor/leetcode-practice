/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function (dungeon) {
  if (!dungeon || !dungeon.length || !dungeon[0].length) return 0
  let dp = dungeon.map(x => x.map(y => 0))
  let ilen = dungeon.length, jlen = dungeon[0].length
  dp[ilen - 1][jlen - 1] = dungeon[ilen - 1][jlen - 1] < 0 ? 1 - dungeon[ilen - 1][jlen - 1] : 1

  for (let distance = dungeon.length + dungeon[0].length - 3; distance >= 0; distance--) {
    for (let i = Math.min(dungeon.length - 1, distance); i >= 0; i--) {
      let j = distance - i
      if (j >= dungeon[i].length) continue
      let arr = []
      if (i + 1 < dp.length) {
        // 从下面到这
        arr.push(dp[i + 1][j])
      }
      if (j + 1 < dp[0].length) {
        // 从右边到这
        arr.push(dp[i][j + 1])
      }
      let min = Math.min(...arr)
      let h = min - dungeon[i][j]
      if (h > 0) {
        dp[i][j] = h
        continue
      }
      dp[i][j] = 1
    }
  }

  return dp[0][0]
};

console.log(calculateMinimumHP([[-2, -3, 3], [-5, -10, 1], [10, 30, -5]]))