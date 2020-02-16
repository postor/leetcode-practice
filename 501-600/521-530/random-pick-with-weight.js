/**
 * @param {number[]} w
 */
var Solution = function (w) {
  if (!w.length) throw 'empty input'
  let ranges = w.concat()
  for (let i = 1; i < w.length; i++) {
    ranges[i] = ranges[i - 1] + w[i]
  }
  this.ranges = ranges
  this.total = ranges[ranges.length - 1]
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function () {
  let random = Math.random()
  let val = random * this.total

  return findInHalf(val, this.ranges, 0, this.ranges.length - 1)

  function findInHalf(val, arr, left, right) {
    if (left === right) return left
    let mid = Math.floor((left + right) / 2)
    if (val < arr[mid]) {
      return findInHalf(val, arr, left, mid)
    }
    return findInHalf(val, arr, mid + 1, right)
  }
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */

// var obj = new Solution([1, 3])
// for (let i = 0; i < 10; i++) {
//   console.log(obj.pickIndex())
// }