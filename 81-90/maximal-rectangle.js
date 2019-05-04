/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
  // 动态规划表
  let dps = matrix.map(x => x.map(y => false)), max = 0
  dps[0][0] = matrix.map(x => x.map(y => y == '1' ? 1 : 0))

  // 填充规划表
  for (let offset = 1; offset < dps.length + dps[0].length; offset++) {
    let noneForOffset = true
    for (let i = 0; i < offset && i < dps.length; i++) {
      let j = offset - i
      if (j >= dps[i].length) {
        continue
      }
      // 如果存在纵向达到i+1个，横向达到j+1个的方形，则左上坐标值为1
      if (i > 0 && dps[i - 1][j]) {
        const { dp, found } = fromTop(dps[i - 1][j], i, j)
        dps[i][j] = dp
        if (found) noneForOffset = false
      }
      if (j > 0 && dps[i][j - 1]) {
        const { dp, found } = fromLeft(dps[i][j - 1], i, j)
        dps[i][j] = dp
        if (found) noneForOffset = false
      }
    }
    if (noneForOffset) return max

  }


  // 从左侧的dp扩展
  function fromTop(dp, i, j) {
    return dp.map((x, ii) => x.map((y, jj) => {
      if (!y) return y
      // 需要在底部增加一行
      let start = ii + i - 1
      if (start >= dps[0][j].length) return 0
      if (dps[0][j][start][jj]) {
        let area = (i + 1) * (j + 1)
        if (area > max) max = area
        return 1
      }
    }))
  }

  // 从左侧的dp扩展
  function fromLeft(dp, i, j) {
    return dp.map((x, ii) => x.map((y, jj) => {
      if (!y) return y
      // 需要在右侧增加一列
      let start = jj + j - 1
      if (dps[i][0][ii][start]) {
        let area = (i + 1) * (j + 1)
        if (area > max) max = area
        return 1
      }
    }))
  }

};

console.log(maximalRectangle([
  ["1", "0", "1", "0", "0"],
  ["1", "0", "1", "1", "1"],
  ["1", "1", "1", "1", "1"],
  ["1", "0", "0", "1", "0"]
]))