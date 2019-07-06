/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
  if (!matrix.length) return 0
  let q = [new Item(0, 0)]
  let left = k
  let used = matrix.map(x => x.map(y => false))
  while (q.length) {
    // replace this sort with sorted list, then sort become O log(n)
    q.sort((a, b) => {
      return matrix[a.i][a.j] - matrix[b.i][b.j]
    })
    let it = q.shift()
    used[it.i][it.j] = true
    left--
    if (left == 0) return matrix[it.i][it.j]
    if (it.j < matrix[it.i].length - 1) {
      q.push(new Item(it.i, it.j + 1))
    }
    if (it.i < matrix.length - 1) {
      q.push(new Item(it.i + 1, it.j))
    }
  }
  return 0

  function Item(i, j) {
    this.i = i
    this.j = j
  }
};

console.log(kthSmallest([
  [1, 5, 9],
  [10, 11, 13],
  [12, 13, 15]
],
  8))