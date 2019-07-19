/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.dic = {}
  this.nums = nums
  this.nums.forEach((x, i) => {
    if (!this.dic[x]) this.dic[x] = []
    this.dic[x].push(i)
  })
};

/** 
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function (target) {
  let arr = this.dic[target]
  return arr[Math.floor(Math.random() * arr.length)]
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */