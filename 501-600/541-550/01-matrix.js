/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function (matrix) {
  let q = []
  let rtn = matrix.map((x, i) => x.map((y, j) => {
    if (y === 0) {
      q.push([i, j])
      return 0
    }
    return Number.MAX_SAFE_INTEGER
  }))
  while (q.length) {
    let next = []
    for (let [i, j] of q) {
      updateNeighbor(i, j + 1, rtn[i][j], next)
      updateNeighbor(i, j - 1, rtn[i][j], next)
      updateNeighbor(i + 1, j, rtn[i][j], next)
      updateNeighbor(i - 1, j, rtn[i][j], next)
    }
    q = next
  }
  return rtn

  function updateNeighbor(i, j, min, q = []) {
    if (i < 0 || j < 0 || i == matrix.length || j == matrix[0].length) return
    if (rtn[i][j] < min + 2) return
    rtn[i][j] = min + 1
    q.push([i, j])
  }

};

// console.log(updateMatrix([[0, 0, 0],
// [0, 1, 0],
// [1, 1, 1]]).join('\n'))