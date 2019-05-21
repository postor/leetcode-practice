/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
  // 横向
  let dp1 = matrix.map(x => x.map(v => v == '1' ? 1 : 0))
  upgrade1()
  //console.log(dp1.join('\n'))
  // 纵向
  let dp2 = dp1.map(x => x.map(y => [y, 1]))
  let max = 0, h = 1
  while (true) {
    dp2 = upgrade2(h)
    if (!dp2) break
    h++
    // console.log('---')
    // console.log(dp2.map(x => x.map(y => y.join('|')).join(',')).join('\n'))
  }
  return max

  function upgrade1() {
    for (let i = 0; i < dp1.length; i++) {
      for (let j = 0; j < dp1[i].length; j++) {
        if (j > 0 && dp1[i][j]) {
          dp1[i][j] = dp1[i][j - 1] + 1
        }
      }
    }
  }
  function upgrade2(h) {
    let upgraded = false, dp3 = dp2.map(x => x.map(y => y.map(z => z)))
    for (let i = 0; i < dp3.length; i++) {
      for (let j = 0; j < dp3[i].length; j++) {
        if (h == 1) {
          if (dp3[i][j][0]) {
            if (dp3[i][j][0] > max) max = dp3[i][j][0]
            upgraded = true
          }
        } else if (i > 0 && dp2[i][j][1] && dp2[i - 1][j][0] && dp2[i - 1][j][1] == h - 1) {
          let upper = dp2[i - 1][j]
          let lower = dp2[i][j]
          let width = Math.min(upper[0], lower[0])
          let height = upper[1] + 1
          let area = width * height
          if (area > max) max = area
          dp3[i][j] = [width, height]
          upgraded = true
        }
      }
    }
    return upgraded ? dp3 : false
  }

};

console.log(maximalRectangle([
  ["0", "1", "1", "0", "1"],
  ["1", "1", "0", "1", "0"],
  ["0", "1", "1", "1", "0"],
  ["1", "1", "1", "1", "0"],
  ["1", "1", "1", "1", "1"],
  ["0", "0", "0", "0", "0"]
]))