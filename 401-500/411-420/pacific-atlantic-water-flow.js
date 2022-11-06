/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var pacificAtlantic = function (matrix) {
  if(!matrix.length) return []
  if(!matrix[0].length) return []
  const PA = 1, ALT = 2, BOTH = 3
  const dic = ['', 'PA', 'ALT', 'BOTH']
  let dp = matrix.map(x => x.map(y => [0, 0, -1, -1])) // [waterheight,PA|ALT|BOTH,paheight,altheight]
  let max = matrix.reduce((x, y) => Math.max(
    x,
    Math.max(...y),
  ), 0)

  for (let depth = 0; depth <= max; depth++) {
    for (let i = 0; i < matrix.length; i++) {
      r(depth, PA, i, 0)
    }
    for (let i = 0; i < matrix[0].length; i++) {
      r(depth, PA, 0, i)
    }
    for (let i = 0; i < matrix.length; i++) {
      r(depth, ALT, i, matrix[0].length - 1)
    }
    for (let i = 0; i < matrix[0].length; i++) {
      r(depth, ALT, matrix.length - 1, i)
    }

    // console.log(`depth=${depth}`)
    // console.log(dp.map(x => x.map(y => dic[y[1]]).join('\t')).join('\n'))
    // console.log('--')
  }

  let rtn = []
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (dp[i][j][1] == BOTH) rtn.push([i, j])
    }
  }
  return rtn

  function r(dep, place, i, j) {
    if (i < 0 || j < 0 || i >= matrix.length || j >= matrix[i].length) return // 越界    
    let [waterheight, curPlace, paheight, altheight] = dp[i][j]
    if (matrix[i][j] > dep) return // 高了，流不进
    if (place == PA) {
      // 之前遍历过
      if (paheight == dep) return
      dp[i][j][2] = dep
    } else {
      // 之前遍历过
      if (altheight == dep) return
      dp[i][j][3] = dep
    }

    dp[i][j][0] = dep // 水流进来
    if (matrix[i][j] == dep) {
      dp[i][j][1] = dp[i][j][1] | place // 标记位置
    }

    if (dp[i][j][1] & place) {
      r(dep, place, i + 1, j)
      r(dep, place, i - 1, j)
      r(dep, place, i, j + 1)
      r(dep, place, i, j - 1)
    }

  }
};

// console.log(pacificAtlantic([[1, 2, 2, 3, 5], [3, 2, 3, 4, 4], [2, 4, 5, 3, 1], [6, 7, 1, 4, 5], [5, 1, 1, 2, 4]]))
console.log(pacificAtlantic([
  [3, 3, 3],
  [3, 1, 3],
  [0, 2, 4]]))