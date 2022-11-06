/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  let arr = new Array(rowIndex + 1).fill(0)
  arr[arr.length - 1] = 1
  for (let row = 2; row < rowIndex + 2; row++) {
    for (let i = arr.length - row; i < arr.length - 1; i++) {
      arr[i] = arr[i] + arr[i + 1]
    }
  }
  return arr
};