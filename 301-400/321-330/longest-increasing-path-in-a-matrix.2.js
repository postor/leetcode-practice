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

  class Group {
    constructor() {
      this.groups = []
    }

    getGroups() {
      return this.groups
    }

    addConnection(x, y) {
      if (this.hasConnection(x, y)) return
      for (let i = 0; i < this.groups.length; i++) {
        if (this.groups[i].includes(x)) {
          this.groups[i].push(y)
          return
        } else if (this.groups[i].includes(x)) {
          this.groups[i].push(x)
          return
        }
      }
      this.groups.push([x, y])
    }

    hasConnection(x, y) {
      for (let i = 0; i < this.groups.length; i++) {
        if (this.groups[i].includes(x)) return this.groups[i].includes(y)
      }
      return false
    }
  }

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
      let group = new Group()
      indexes.filter(x => {
        let [v, i, j] = arr[x]
        let connected = indexes
          .filter(y => y != x)
          .filter(y => {
            if (group.hasConnection(x, y)) return true
            let [v, i1, j1] = arr[y]
            if (i1 == i) {
              if (j1 == j + 1 || j1 == j - 1) {
                group.addConnection(x, y)
                return true
              }
            }
            if (j1 == j) {
              if (i1 == i + 1 || i1 == i - 1) {
                group.addConnection(x, y)
                return true
              }
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

      group.getGroups().forEach((connectedIndexes) => {
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
      })
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

console.log(longestIncreasingPath([
  [9, 9, 4],
  [6, 6, 8],
  [2, 1, 1]]))
