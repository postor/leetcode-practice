/**
 * @param {number} N
 * @param {number[]} blacklist
 */
var Solution = function (N, blacklist) {
  blacklist.sort((a, b) => a - b)
  this.blacklist = blacklist
  this.N = N - blacklist.length
};

/**
 * @return {number}
 */
Solution.prototype.pick = function () {
  let num = Math.floor(Math.random() * this.N)
  for (let x of this.blacklist) {
    if (num < x) return num
    num++
  }
  return num
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(N, blacklist)
 * var param_1 = obj.pick()
 */