/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDiagonalOrder = function (matrix) {
  let rtn = [], m = matrix.length, n = matrix[0].length
  for (let total = 0; total < m + n - 1; total++) {
    let direction = total % 2
    if (direction) {
      for (let i = Math.max(0, total - n + 1); i < m; i++) {
        let j = total - i
        if (j < 0) break
        // console.log([i,j])
        rtn.push(matrix[i][j])
      }
    } else {
      for (let j = Math.max(0, total - m + 1); j < n; j++) {
        let i = total - j
        if (i < 0) break
        // console.log([i,j])
        rtn.push(matrix[i][j])
      }
    }
  }
  return rtn
};

console.log(findDiagonalOrder([
  [ 1, 2, 3 ],
  [ 4, 5, 6 ],
  [ 7, 8, 9 ]
 ]))