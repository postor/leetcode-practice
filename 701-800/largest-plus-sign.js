/**
 * @param {number} N
 * @param {number[][]} mines
 * @return {number}
 */
var orderOfLargestPlusSign = function (N, mines) {
  let grid = new Array(N).fill(0).map(x => new Array(N).fill(1))
  for (let [i, j] of mines) {
    grid[i][j] = 0
  }
  let dpi = grid.map(x => x.map(y => y)), dpj = grid.map(x => x.map(y => y))
  processI()
  processJ()
  let maxK = 0
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      maxK = Math.max(Math.min(dpi[i][j], dpj[i][j]), maxK)
    }
  }
  return maxK

  function processI() {
    for (let j = 0; j < N; j++) {
      let start = -1;
      for (let i = 0; i < N; i++) {
        if (grid[i][j] == 1) {
          if (start == -1) {
            start = i
          }
          continue
        } else {
          if (start == -1) continue
          fill(start, i - 1)
          start = -1
        }
      }
      if (start != -1) fill(start, N - 1)
      function fill(start, end) {
        let mid = (start + end) / 2
        for (let i1 = start, v = 1; i1 <= mid; i1++, v++) dpi[i1][j] = v
        for (let i1 = end, v = 1; i1 >= mid; i1--, v++) dpi[i1][j] = v
      }
    }
  }
  function processJ() {
    for (let i = 0; i < N; i++) {
      let start = -1;
      for (let j = 0; j < N; j++) {
        if (grid[i][j] == 1) {
          if (start == -1) {
            start = j
          }
          continue
        } else {
          if (start == -1) continue
          fill(start, j - 1)
          start = -1
        }
      }
      if (start != -1) fill(start, N - 1)
      function fill(start, end) {
        let mid = (start + end) / 2
        for (let j1 = start, v = 1; j1 <= mid; j1++, v++) dpj[i][j1] = v
        for (let j1 = end, v = 1; j1 >= mid; j1--, v++) dpj[i][j1] = v
      }
    }
  }
};

// console.log(orderOfLargestPlusSign(3, [[0, 0]]))