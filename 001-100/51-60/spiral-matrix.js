/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  if (!matrix.length) {
    return []
  }
  let top = 0, left = 0, bottom = matrix.length - 1
    , right = matrix[0].length - 1, rtn = [];
  while (true) {
    if (top > bottom) break
    for (let i = left; i <= right; i++) {
      rtn.push(matrix[top][i])
    }
    top++
    if (left > right) break
    for (let i = top; i <= bottom; i++) {
      rtn.push(matrix[i][right])
    }
    right--
    if (top > bottom) break
    for (let i = right; i >= left; i--) {
      rtn.push(matrix[bottom][i])
    }
    bottom--
    if (left > right) break
    for (let i = bottom; i >= top; i--) {
      rtn.push(matrix[i][left])
    }
    left++
  }
  return rtn
};

let input = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12]
]

console.log(spiralOrder(input))