/**
 * @param {number[][]} matrix
 */
var NumMatrix = function (matrix) {
  // [
  //   [3, 0, 1, 4, 2],   
  //   [5, 6, 3, 2, 1],    
  //   [1, 2, 0, 1, 5],    
  //   [4, 1, 0, 1, 7],
  //   [1, 0, 3, 0, 5]
  // ]
  this.matrix = matrix
  if (!matrix.length) return
  this.cache = {}
  for (let i = 0; i < matrix[0].length; i++) {
    this.sumRegion(0, 0, matrix.length - 1, i, true)
  }

};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2, init = false) {
  if (!this.matrix.length) return 0

  if (row1 == row2) {
    if (col1 == col2)
      return this.matrix[row1][col1]
  }

  let key = `${row1},${col1},${row2},${col2}`
  if (this.cache[key] !== undefined) return this.cache[key]

  if (!init) {
    if (row2 < row1) return 0
    if (col2 < col1) return 0
    return this.sumRegion(0, 0, row2, col2)
      + this.sumRegion(0, 0, row1 - 1, col1 - 1)
      - this.sumRegion(0, 0, row1 - 1, col2)
      - this.sumRegion(0, 0, row2, col1 - 1)

  }

  const setCache = (rtn) => {
    this.cache[key] = rtn
    return rtn
  }

  if (row1 == row2) {
    return setCache(
      this.sumRegion(row1, col1, row1, col2 - 1, init) + this.sumRegion(row1, col2, row1, col2, init)
    )
  }
  return setCache(
    this.sumRegion(row1, col1, row2 - 1, col2, init) + this.sumRegion(row2, col1, row2, col2, init)
  )
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */

// let nm = new NumMatrix([[3, 0, 1, 4, 2], [5, 6, 3, 2, 1], [1, 2, 0, 1, 5], [4, 1, 0, 1, 7], [1, 0, 3, 0, 5]])
// console.log(nm.sumRegion(2,1,4,3))
// console.log(nm.sumRegion(2,1,4,3))
// console.log(nm.sumRegion(1, 1, 2, 2))
// console.log(nm.sumRegion(1,2,2,4))