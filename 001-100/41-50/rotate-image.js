/**
 * 题目要求不要申请matrix，但没说不要申请数组，整个数组换会轻松很多
 * 这里实现一个额外空间恒定的
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  let n = matrix.length
  //i表示从外到内第i层
  for (let i = 0; i < n / 2; i++) {
    //count表示从i层需要顺时针转count次
    let count = n - i * 2 - 1
    for (let x = 0; x < count; x++) {
      rotateRing(i)
    }
  }
  return matrix

  function rotateRing(i) {
    //let tl = [i, i], tr = [i, n - i - 1], br = [n - i - 1, n - i - 1], bl = [n - i - 1, i]
    for (let a = i; a < n - i - 1; a++) {
      swap([a, i], [a + 1, i])
    }
    for (let b = i; b < n - i - 1; b++) {
      swap([n - i - 1, b], [n - i - 1, b + 1])
    }
    for (let c = n - i - 1; c > i; c--) {
      swap([c, n - i - 1], [c - 1, n - i - 1])
    }
    for (let d = n - i - 1; d > i + 1; d--) {
      swap([i, d], [i, d - 1])
    }
  }

  function swap(p1, p2) {
    let t = matrix[p1[0]][p1[1]]
    matrix[p1[0]][p1[1]] = matrix[p2[0]][p2[1]]
    matrix[p2[0]][p2[1]] = t
    //console.log(matrix.join('\n'))
  }

};

console.log(rotate([[3, 3, 3], [4, 4, 4], [5, 5, 5]]).join('\n'))