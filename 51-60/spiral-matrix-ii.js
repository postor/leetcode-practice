/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  let matrix = Array(n).fill(0).map(x => Array(n).fill(0))
  let top = 0, left = 0, bottom = matrix.length - 1
    , right = matrix[0].length - 1, counter = getCounter()

  while (true) {
    if (top > bottom) break
    for (let i = left; i <= right; i++) {
      matrix[top][i] = counter()
    }
    top++
    if (left > right) break
    for (let i = top; i <= bottom; i++) {
      matrix[i][right] = counter()
    }
    right--
    if (top > bottom) break
    for (let i = right; i >= left; i--) {
      matrix[bottom][i] = counter()
    }
    bottom--
    if (left > right) break
    for (let i = bottom; i >= top; i--) {
      matrix[i][left] = counter()
    }
    left++
  }
  return matrix

  function getCounter() {
    let i = 1
    return () => i++
  }
};

console.log(generateMatrix(3).join('\n'))