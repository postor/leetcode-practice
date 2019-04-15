/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  //第一阶段，标记
  //空间只使用了4个变量=空间常量级别

  //首行首列额外记录
  let flushRow0 = false, flushColumn0 = false
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][0] == 0) flushRow0 = true
  }
  for (let i = 0; i < matrix[0].length; i++) {
    if (matrix[0][i] == 0) flushColumn0 = true
  }

  //其他的标记到行首猎首，如果行或列中有0，则标记行首列首为0
  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[i].length; j++) {
      if (matrix[i][j] == 0) {
        matrix[0][j] = 0
        matrix[i][0] = 0
      }
    }
  }
  //第二阶段，整行整列赋值0
  //为了避免覆盖首行里的列标记，先避开首行
  for (let i = 1; i < matrix.length; i++) {
    if (matrix[i][0] == 0) {
      for (let j = 0; j < matrix[i].length; j++) {
        matrix[i][j] = 0
      }
    }
  }
  //同理避开首列
  for (let i = 1; i < matrix[0].length; i++) {
    if (matrix[0][i] == 0) {
      for (let j = 0; j < matrix.length; j++) {
        matrix[j][i] = 0
      }
    }
  }
  //处理首行首列
  if (flushRow0) {
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][0] = 0
    }
  }
  if (flushColumn0) {
    for (let i = 0; i < matrix[0].length; i++) {
      matrix[0][i] = 0
    }
  }
  return matrix
};

// console.log(setZeroes([
//   [0, 1, 2, 0],
//   [3, 4, 5, 2],
//   [1, 3, 1, 5]
// ]).join('\n'))

console.log(setZeroes([[1, 0, 3]]).join('\n'))