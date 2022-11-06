/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  this.nums = nums
  this.ranges = nums.map(x => nums.map(y => y))
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      this.ranges[i][j] = this.ranges[i][j - 1] + this.ranges[i][j]
    }
  }
};

/** 
 * @param {number} i 
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function (i, val) {
  let diff = val - this.nums[i]
  for (let k = 0; k < this.ranges.length; k++) {
    for (let j = k; j < this.ranges.length; j++) {
      if (k <= i && j >= i) {
        this.ranges[k][j] += diff
      }
    }
  }
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function (i, j) {
  return this.ranges[i][j]
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(i,val)
 * var param_2 = obj.sumRange(i,j)
 */