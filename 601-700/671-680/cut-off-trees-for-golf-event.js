/**
 * @param {number[][]} forest
 * @return {number}
 */
var cutOffTree = function (forest) {
  if (!forest.length || !forest[0].length) return 0
  let treeCounts = getTreeCounts(), maxSteps = forest.length * forest[0].length
  let dp = forest.map(x => x.map(y => Number.MAX_SAFE_INTEGER))
  dp[0][0] = 0
  for (let [i, count] of treeCounts) {
    if (!count) continue
    if (count === 1) {
      dp = tryCover(i, count)
      if (dp === false) return -1
      dp = restartDp(i)
    } else {
      throw 'not ready'
    }
  }
  for (let i = 0; i < dp.length; i++) {
    for (let j = 0; j < dp[0].length; j++) {
      if (forest[i][j] === treeCounts[treeCounts.length - 1][0]) {
        return dp[i][j]
      }
    }
  }
  return -1


  function restartDp(height) {
    return forest.map((x, i) => x.map(
      (y, j) => y === height ? dp[i][j] : Number.MAX_SAFE_INTEGER))
  }

  function tryCover(height, count) {
    // console.log(dp.join('\n'))
    let toCover = count
    for (let step = 0; step < maxSteps; step++) {
      for (let i = 0; i < dp.length; i++) {
        for (let j = 0; j < dp[0].length; j++) {
          if (dp[i][j] === Number.MAX_SAFE_INTEGER) continue
          tryGoto(i + 1, j, dp[i][j] + 1)
          tryGoto(i - 1, j, dp[i][j] + 1)
          tryGoto(i, j + 1, dp[i][j] + 1)
          tryGoto(i, j - 1, dp[i][j] + 1)
        }
      }
      if (toCover === 0) break
    }
    if (toCover !== 0) {
      return false
    }
    return dp

    function tryGoto(i, j, steps) {
      if (i < 0 || j < 0 || i >= dp.length || j >= dp[0].length) return
      if (forest[i][j] === 0) return
      if (dp[i][j] > steps) {
        if (forest[i][j] === height && dp[i][j] === Number.MAX_SAFE_INTEGER) {
          toCover--
        }
        dp[i][j] = steps
      }
    }
  }
  function getTreeCounts() {
    let treeCounts = {}
    forest.forEach(x => x.forEach(y =>
      y > 1 ? treeCounts[y] = (treeCounts[y] || 0) + 1 : 0))
    let treeCountsArr = Object.keys(treeCounts).map(k => [parseInt(k), treeCounts[k]])
    treeCountsArr.sort(([h1], [h2]) => h1 - h2)
    if (forest[0][0] === treeCountsArr[0][0]) treeCountsArr[0][1]--
    return treeCountsArr
  }
};

// console.log(cutOffTree([[32948788, 15988279, 47337324, 39227344, 85654447, 98416349], [93843632, 15399635, 52329048, 93802512, 94219130, 45470071], [63674745, 73056518, 68039988, 91664245, 88778192, 41421926], [23685319, 94681738, 15169873, 2480096, 68876624, 84897303]]), 6)

// console.log(cutOffTree([
//   [2, 3, 4],
//   [0, 0, 5],
//   [8, 7, 6]
// ]), 6)

// console.log(cutOffTree([
//   [1, 2, 3],
//   [0, 0, 0],
//   [7, 6, 5]
// ]), -1)

