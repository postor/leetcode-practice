/**
 * @param {number[]} A
 * @return {number}
 */
var numberOfArithmeticSlices = function (A) {
  let valueIndexes = {}
  A.forEach((v, i) => {
    if (!valueIndexes[v]) valueIndexes[v] = []
    valueIndexes[v].push(i)
  })

  let total = 0
  for (let i = 0; i < A.length - 2; i++) {
    total += countIJ(i, i + 1)
  }
  return total

  function countIJ(i, j) {
    let step = A[j] - A[i]
    return findTarget(A[j] + step, step, j)
  }

  function findTarget(target, step, start) {
    if (!valueIndexes[target]) return 0
    let ids = valueIndexes[target].filter(i => i == start + 1)
    if (!ids.length) return 0
    return ids.length + ids
      .map(i => findTarget(target + step, step, i))
      .reduce((a, b) => a + b)
  }
};

console.log(numberOfArithmeticSlices([2, 1, 3, 4, 2, 3]))