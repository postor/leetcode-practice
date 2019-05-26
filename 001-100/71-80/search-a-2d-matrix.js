/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  if (!matrix.length) return false
  if (!matrix[0].length) return false
  //最小的也比目标大，放弃
  if (matrix[0][0] > target) return false
  //最大比目标小
  let lastRow = matrix[matrix.length - 1]
  if (lastRow[lastRow.length] < target) return false
  let foundRow = tryHalf(matrix, row => {
    if (row[0] > target) return -1
    if (row[row.length - 1] < target) return 1
    return 0
  })
  if (foundRow === false) return false
  let foundCell = tryHalf(foundRow, cell => {
    return target - cell
  })
  if (foundCell === false) return false
  return true

  function tryHalf(arr, compareFn) {
    return r()
    function r(i = 0, j = arr.length - 1) {
      if (j - i <= 1) {
        if (compareFn(arr[i]) == 0) {
          return arr[i]
        }
        if (compareFn(arr[j]) == 0) {
          return arr[j]
        }
        return false
      }
      let half = Math.floor((i + j) / 2)
      let halfCmp = compareFn(arr[half])
      if (halfCmp == 0) {
        return arr[half]
      }
      if (halfCmp < 0) {
        return r(i, half)
      }
      return r(half, j)
    }
  }
};

console.log(searchMatrix([
  [1]
], 2))

// console.log(searchMatrix([
//   [1, 3, 5, 7],
//   [10, 11, 16, 20],
//   [23, 30, 34, 50]
// ], 13))

// console.log(searchMatrix([
//   [1, 3, 5, 7],
//   [10, 11, 16, 20],
//   [23, 30, 34, 50]
// ], 3))