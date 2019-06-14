/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let width = matrix.length
  if (!width) return false
  let height = matrix[0].length
  if (!height) return false
  let i = 0, j = 0, ito = width - 1, jto = height - 1
  while (i <= ito && j <= jto) {
    let c1 = findRow(i, j, jto)
    let r1 = findColumn(j, i, ito)
    if (matrix[i][c1] == target) return true
    if (matrix[r1][j] == target) return true
    i++ , j++ , ito = r1, jto = c1
  }
  return false

  function findRow(i, cfrom, cto) {
    return findHalf(cfrom, cto, (x) => target < matrix[i][x])
  }

  function findColumn(i, rfrom, rto) {
    return findHalf(rfrom, rto, (x) => target < matrix[x][i])
  }

  function findHalf(from, to, judgeOut) {
    if (to == from) return from
    if (to - from == 1) return judgeOut(to) ? from : to
    let mid = Math.floor((from + to) / 2)
    if (judgeOut(mid)) {
      return findHalf(from, mid - 1, judgeOut)
    }
    return findHalf(mid, to, judgeOut)
  }

};

// console.log(searchMatrix([
//   [1, 4, 7, 11, 15],
//   [2, 5, 8, 12, 19],
//   [3, 6, 9, 16, 22],
//   [10, 13, 14, 17, 24],
//   [18, 21, 23, 26, 30]
// ], 5))

// console.log(searchMatrix([
//   [1, 2, 3, 4, 5],
//   [6, 7, 8, 9, 10],
//   [11, 12, 13, 14, 15],
//   [16, 17, 18, 19, 20],
//   [21, 22, 23, 24, 25]]
//   , 19))

// console.log(searchMatrix([
//   [1, 3, 5, 7, 9],
//   [2, 4, 6, 8, 10],
//   [11, 13, 15, 17, 19],
//   [12, 14, 16, 18, 20],
//   [21, 22, 23, 24, 25]],
//   13))


// console.log(searchMatrix([
//   [1, 4, 7, 11, 15],
//   [2, 5, 8, 12, 19],
//   [3, 6, 9, 16, 22],
//   [10, 13, 14, 17, 24],
//   [18, 21, 23, 26, 30]]
//   , 20
// ))

