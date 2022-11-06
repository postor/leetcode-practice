/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
  let h = matrix.length, w = matrix[0].length
  if (!h || !w) return 0
  const walked = matrix.map(x => x.map(y => false))
  const uncertains = [[0, 0]]
  walked[0][0] = true

  let cur = 1
  while (cur <= k) {
    uncertains.sort(([i1, j1], [i2, j2]) => matrix[i1][j1] - matrix[i2][j2])
    if (k == cur) {
      let [i, j] = uncertains[0]
      return matrix[i][j]
    }
    let [i, j] = uncertains.shift() // get the smallist
    tryPush(i, j + 1)
    tryPush(i + 1, j)
    cur++
  }

  function tryPush(i, j) {
    if (i == h || j == w) return false

    if (walked[i][j]) return false
    walked[i][j] = true

    uncertains.push([i, j])
  }

};

// console.log(kthSmallest([
//   [1, 5, 9],
//   [10, 11, 13],
//   [12, 13, 15]
// ],
//   6))

console.log(kthSmallest([
  [1, 3, 5],
  [6, 7, 12],
  [11, 14, 14]
], 6))