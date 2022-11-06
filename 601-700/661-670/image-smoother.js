/**
 * @param {number[][]} M
 * @return {number[][]}
 */
var imageSmoother = function (M) {
  let sums = M.map(x => x.map(y => y))
  for (let i = 0; i < M.length; i++) {
    for (let j = 1; j < M[i].length; j++) {
      sums[i][j] = sums[i][j - 1] + M[i][j]
    }
  }
  for (let i = 0; i < M.length; i++) {
    for (let j = 0; j < M[i].length; j++) {
      let total = 0, cells = 0
      for (let i1 = Math.max(0, i - 1); i1 <= Math.min(M.length - 1, i + 1); i1++) {
        let start = Math.max(0, j - 1), end = Math.min(M[i].length - 1, j + 1)
        cells += end - start + 1
        // if (sums[i1] === undefined) debugger
        total += start === 0 ? sums[i1][end] : sums[i1][end] - sums[i1][start - 1]
      }
      M[i][j] = Math.floor(total / cells)
    }
  }
  return M
};

// console.log(imageSmoother([[1, 1, 1],
// [1, 0, 1],
// [1, 1, 1]]).join('\n'))