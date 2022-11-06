/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var maxSumSubmatrix = function (matrix, k) {
  let sum0 = matrix.map(x => x.map(y => y))
  for (let i = 0; i < sum0.length; i++) {
    for (let j = 1; j < sum0[i].length; j++) {
      sum0[i][j] = sum0[i][j - 1] + sum0[i][j]
    }
  }
  for (let i = 1; i < sum0.length; i++) {
    for (let j = 0; j < sum0[i].length; j++) {
      sum0[i][j] = sum0[i - 1][j] + sum0[i][j]
    }
  }

  let max = Number.MIN_SAFE_INTEGER

  for (let top1 = 0; top1 < sum0.length; top1++) {
    for (let left1 = 0; left1 < sum0[top1].length; left1++) {
      for (let top2 = top1; top2 < sum0.length; top2++) {
        for (let left2 = left1; left2 < sum0[top2].length; left2++) {
          let sum = getSum(top1, left1, top2, left2)
          if (sum > k) continue
          max = Math.max(max, sum)
        }
      }
    }
  }

  return max


  function getSum(top1, left1, top2, left2) {
    if (top1 == 0) {
      if (left1 == 0) {
        return sum0[top2][left2]
      }
      return sum0[top2][left2] - sum0[top2][left1 - 1]
    }
    if (left1 == 0) {
      return sum0[top2][left2] - sum0[top1 - 1][left2]
    }
    return sum0[top2][left2] + sum0[top1 - 1][left1 - 1] - sum0[top1 - 1][left2] - sum0[top2][left1 - 1]
  }
};

console.log(maxSumSubmatrix([[1, 0, 1], [0, -2, 3]], 2))