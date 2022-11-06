/**
 * @param {number} n_rows
 * @param {number} n_cols
 */
var Solution = function (n_rows, n_cols) {
  this.n_rows = n_rows
  this.n_cols = n_cols
  this.total = n_rows * n_cols
  this.reset()
};

/**
 * @return {number[]}
 */
Solution.prototype.flip = function () {
  let target = Math.floor(Math.random() * (this.total - this.ranges.length))
  for (let i = 0; i < this.ranges.length; i++) {
    if (this.ranges[i] <= target) {
      target++
      continue
    }
    this.ranges.splice(i, 0, target)
    return to2d(target, this.n_cols)
  }

  this.ranges.push(target)
  return to2d(target, this.n_cols)

  function to2d(i, n_cols) {
    let y = i % n_cols
    let x = (i - y) / n_cols
    return [x, y]
  }
};

/**
 * @return {void}
 */
Solution.prototype.reset = function () {
  this.ranges = []
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(n_rows, n_cols)
 * var param_1 = obj.flip()
 * obj.reset()
 */

// var obj = new Solution(2, 2)

// console.log(obj.flip())
// console.log(obj.flip())
// console.log(obj.flip())
// console.log(obj.flip())