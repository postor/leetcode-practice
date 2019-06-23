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

  for (let x = 0; x < arr.length; x++) {
    let end = x
    while (end + 1 < arr.length && arr[x][0] == arr[end + 1][0]) end++
    let sameCount = end - x + 1
    if (sameCount == 1) {
      let [v, i, j] = arr[x]
      // up
      detectAndUpdate(i - 1, j, v, dp[i][j])
      // down
      detectAndUpdate(i + 1, j, v, dp[i][j])
      // left
      detectAndUpdate(i, j - 1, v, dp[i][j])
      // right
      detectAndUpdate(i, j + 1, v, dp[i][j])
    } else {
      let indexes = []
      for (let y = x; y <= end; y++) {
        indexes.push(y)
      }

      let connectedIndexes = indexes.filter(x => {
        let [v, i, j] = arr[x]
        let connected = indexes
          .filter(y => y != x)
          .filter(y => {
            let [v, i1, j1] = arr[y]
            if (i1 == i) {
              return j1 == j + 1 || j1 == j - 1
            }
            if (j1 == j) {
              return i1 == i + 1 || i1 == i - 1
            }
            return false
          })
        if (!connected.length) {
          detectAndUpdate(i - 1, j, v, dp[i][j])
          // down
          detectAndUpdate(i + 1, j, v, dp[i][j])
          // left
          detectAndUpdate(i, j - 1, v, dp[i][j])
          // right
          detectAndUpdate(i, j + 1, v, dp[i][j])
        }
        return connected.length
      })


      let perm = permulate(connectedIndexes)
      let dps = perm.map((ids) => {
        let dp1 = dp.map(x => x.map(y => y))

        let used = {}
        ids.forEach(z => {
          let [v, i, j] = arr[z]
          used[`${i},${j}`] = true
          // up
          !used[`${i - 1},${j}`] && detectAndUpdate(i - 1, j, v, dp1[i][j], dp1)
          // down
          !used[`${i + 1},${j}`] && detectAndUpdate(i + 1, j, v, dp1[i][j], dp1)
          // left
          !used[`${i},${j - 1}`] && detectAndUpdate(i, j - 1, v, dp1[i][j], dp1)
          // right
          !used[`${i},${j + 1}`] && detectAndUpdate(i, j + 1, v, dp1[i][j], dp1)
        })
        return dp1
      })
      dp = dp.map((x, i) => x.map((y, j) => {
        return Math.max(y, ...dps.map(dp1 => dp1[i][j]))
      }))
      x += indexes.length - 1
    }
  }

  // arr.forEach(([v, i, j]) => {
  //   // up
  //   detectAndUpdate(i - 1, j, v, dp[i][j])
  //   // down
  //   detectAndUpdate(i + 1, j, v, dp[i][j])
  //   // left
  //   detectAndUpdate(i, j - 1, v, dp[i][j])
  //   // right
  //   detectAndUpdate(i, j + 1, v, dp[i][j])
  // })
  // console.log('---')
  // console.log(dp.map(x => x.join('\t')).join('\n'))
  return max


  function detectAndUpdate(i, j, v, count, dp1 = dp) {
    if (i < 0 || j < 0 || i >= matrix.length || j >= matrix[0].length) return
    if (matrix[i][j] < v) return
    dp1[i][j] = Math.max(count + 1, dp1[i][j])
    max = Math.max(max, dp1[i][j])
  }

  function permulate(lefts = [], cur = []) {
    if (lefts.length == 1) {
      cur.push(lefts[0])
      return [cur]
    }
    let rtn = []
    for (let i = 0; i < lefts.length; i++) {
      let c = cur.concat(lefts[i])
      let t = lefts.concat()
      t.splice(i, 1)
      rtn = rtn.concat(permulate(t, c))
    }
    return rtn
  }
};

// console.log(longestIncreasingPath([
//   [17, 4, 6, 11, 4, 0, 17, 12, 19, 12, 12, 0],
//   [0, 6, 4, 4, 5, 9, 15, 1, 11, 13, 18, 0],
//   [4, 2, 13, 1, 2, 7, 15, 5, 14, 6, 8, 6]]))


console.log(longestIncreasingPath([
  [0, 0, 12, 6, 15, 1, 12, 10, 12, 10, 6],
  [6, 19, 6, 13, 5, 18, 17, 19, 7, 11, 13],
  [8, 6, 9, 1, 15, 7, 10, 10, 3, 7, 18],
  [2, 14, 12, 10, 17, 2, 3, 10, 4, 8, 3],
  [8, 2, 19, 3, 19, 10, 17, 18, 12, 10, 8],
  [0, 17, 14, 12, 10, 4, 8, 17, 15, 11, 19],
  [13, 6, 14, 8, 16, 19, 12, 17, 16, 17, 8],
  [7, 4, 6, 8, 3, 9, 19, 12, 4, 13, 0],
  [18, 0, 16, 12, 10, 11, 8, 14, 6, 3, 0],
  [10, 3, 14, 17, 19, 18, 10, 2, 11, 5, 19],
  [6, 2, 2, 1, 8, 1, 11, 7, 7, 18, 1],
  [11, 12, 16, 0, 9, 6, 8, 3, 12, 8, 15],
  [5, 18, 17, 4, 11, 9, 9, 6, 8, 2, 4],
  [3, 12, 7, 2, 9, 17, 14, 10, 14, 5, 0]
]))