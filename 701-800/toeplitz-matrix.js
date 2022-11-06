/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function (matrix) {
  for (let i = 0; i < matrix.length - 1; i++) {
    if (!checkCell(i, 0)) return false
  }
  for (let j = 1; j < matrix[0].length - 1; j++) {
    if (!checkCell(0, j)) return false
  }
  return true

  function checkCell(i, j) {
    if (i + 1 >= matrix.length) return true
    if (j + 1 >= matrix[i].length) return true
    if (matrix[i][j] != matrix[i + 1][j + 1]) {
      return false
    }
    return checkCell(i + 1, j + 1)
  }
};

console.log(isToeplitzMatrix([[1, 2, 3, 4], [5, 1, 2, 3], [9, 5, 1, 2]]
))