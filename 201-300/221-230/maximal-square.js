/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  let h = matrix.length
  if (!h) return 0
  let w = matrix[0].length
  if (!w) return 0

  //使用dp，正方形总是由小的正方形组成
  // dp[top][left]=width/height
  let lastList = []
  let dp = matrix.map((x, i) => x.map((y, j) => {
    if (y!='0') lastList.push([i, j])
    return y
  }))
  if (!lastList.length) return 0
  const maxWidth = Math.min(w, h)
  for (let width = 2; width <= maxWidth; width++) {
    let curlist = []
    lastList.forEach(([i, j]) => {
      let isSquire = checkSquire(i, j, width)
      if (isSquire) {
        curlist.push([i, j])
      }
    })
    if (!curlist.length) return (width - 1) * (width - 1)
    lastList = curlist
  }
  return maxWidth * maxWidth

  function checkSquire(i, j, width) {
    if (!checkBorder(i, j, width)) return false
    let smallerWidth = width - 1
    let isSquire =
      (dp[i + 1][j] == smallerWidth)
      && (dp[i][j + 1] == smallerWidth)
      && (dp[i + 1][j + 1] == smallerWidth)
    if (isSquire) dp[i][j] = width
    return isSquire
  }
  function checkBorder(i, j, width) {
    if (i + width > h) return false
    if (j + width > w) return false
    return true
  }
};

// console.log(maximalSquare([
//   [1, 0, 1, 0, 0],
//   [1, 0, 1, 1, 1],
//   [1, 1, 1, 1, 1],
//   [1, 0, 0, 1, 0],
// ]))


console.log(maximalSquare([
  [1, 0, 1, 0, 0],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 0, 0, 1, 0],
]))